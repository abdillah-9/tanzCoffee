// import path
import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

// input folder
const inputFolder = path.join(process.cwd(), 'src', 'assets'); // <-- updated path
const outputFolder = path.join(process.cwd(), 'src', 'assets', 'avif');

// create output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder, { recursive: true });

// read files
const files = fs.readdirSync(inputFolder).filter(file => /\.(jpe?g|png)$/i.test(file));

for (const file of files) {
  const inputPath = path.join(inputFolder, file);
  const outputPath = path.join(outputFolder, file.replace(/\.(jpe?g|png)$/i, '.avif'));

  sharp(inputPath)
    .avif({ quality: 60 }) // adjust quality if you want
    .toFile(outputPath)
    .then(() => console.log(`Converted: ${file}`))
    .catch(err => console.error(err));
}
