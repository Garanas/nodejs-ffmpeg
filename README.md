
# Node and FFMPEG communication

A proof of concept that allows you to embed any ffmpeg command line arguments into a nodejs application. Add additional routing, file uploading and downloading and you can make an interface around ffmpeg on a page. Without being able to see their source code, I suspect websites such as [freeconvert](https://www.freeconvert.com/mp4-to-mp3) take this approach to facilitate some of their services.

## Libraries

The proof of concept relies on one library:

- [@ffmpeg-installer/ffmpeg](https://www.npmjs.com/package/@ffmpeg-installer/ffmpeg): used to simplify acquiring ffmpeg
