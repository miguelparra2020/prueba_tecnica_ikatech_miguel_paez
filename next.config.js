/** @type {import('next').NextConfig} */
const nextConfig = {
}

const path = require('path')

module.exports = {
    images: {
        domains: ['res.cloudinary.com', 'miguelpaez9612.pythonanywhere.com'],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
};
