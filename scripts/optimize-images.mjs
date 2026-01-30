import sharp from 'sharp'
import { readdir, stat, mkdir } from 'fs/promises'
import { join, extname, basename } from 'path'

const IMAGES_DIR = './public/images'
const MAX_WIDTH = 1920
const JPEG_QUALITY = 80
const WEBP_QUALITY = 80

async function getAllImages(dir) {
  const files = []
  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await getAllImages(fullPath))
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(fullPath)
    }
  }
  return files
}

async function getFileSize(path) {
  const stats = await stat(path)
  return stats.size
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}

async function optimizeImage(inputPath) {
  const ext = extname(inputPath).toLowerCase()
  const originalSize = await getFileSize(inputPath)

  // Read image and get metadata
  const image = sharp(inputPath)
  const metadata = await image.metadata()

  // Resize if wider than MAX_WIDTH
  const needsResize = metadata.width > MAX_WIDTH
  const resizedImage = needsResize
    ? image.resize(MAX_WIDTH, null, { withoutEnlargement: true })
    : image

  // Optimize and overwrite original JPG/PNG
  if (ext === '.jpg' || ext === '.jpeg') {
    await resizedImage
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toFile(inputPath + '.tmp')
  } else if (ext === '.png') {
    await resizedImage
      .png({ compressionLevel: 9, palette: true })
      .toFile(inputPath + '.tmp')
  }

  // Replace original with optimized
  const { rename } = await import('fs/promises')
  await rename(inputPath + '.tmp', inputPath)

  // Generate WebP version
  const webpPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  await sharp(inputPath)
    .webp({ quality: WEBP_QUALITY })
    .toFile(webpPath)

  const newSize = await getFileSize(inputPath)
  const webpSize = await getFileSize(webpPath)

  return {
    path: inputPath,
    originalSize,
    newSize,
    webpSize,
    resized: needsResize,
    originalWidth: metadata.width,
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script\n')
  console.log(`Settings: Max width ${MAX_WIDTH}px, JPEG quality ${JPEG_QUALITY}, WebP quality ${WEBP_QUALITY}\n`)

  const images = await getAllImages(IMAGES_DIR)
  console.log(`Found ${images.length} images to optimize\n`)

  let totalOriginal = 0
  let totalNew = 0
  let totalWebp = 0

  for (const imagePath of images) {
    try {
      const result = await optimizeImage(imagePath)
      totalOriginal += result.originalSize
      totalNew += result.newSize
      totalWebp += result.webpSize

      const savings = ((1 - result.newSize / result.originalSize) * 100).toFixed(1)
      const webpSavings = ((1 - result.webpSize / result.originalSize) * 100).toFixed(1)

      console.log(`✓ ${result.path}`)
      console.log(`  Original: ${formatSize(result.originalSize)}${result.resized ? ` (${result.originalWidth}px → ${MAX_WIDTH}px)` : ''}`)
      console.log(`  Optimized: ${formatSize(result.newSize)} (-${savings}%)`)
      console.log(`  WebP: ${formatSize(result.webpSize)} (-${webpSavings}%)\n`)
    } catch (error) {
      console.error(`✗ ${imagePath}: ${error.message}\n`)
    }
  }

  console.log('─'.repeat(50))
  console.log(`\n📊 Summary:`)
  console.log(`  Original total: ${formatSize(totalOriginal)}`)
  console.log(`  Optimized JPG/PNG: ${formatSize(totalNew)} (-${((1 - totalNew / totalOriginal) * 100).toFixed(1)}%)`)
  console.log(`  WebP total: ${formatSize(totalWebp)} (-${((1 - totalWebp / totalOriginal) * 100).toFixed(1)}%)`)
}

main().catch(console.error)
