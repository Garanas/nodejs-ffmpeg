
// used to get and being able to use ffmpeg
import { path, version, url } from '@ffmpeg-installer/ffmpeg';
import { spawn } from 'child_process'

// ./ffmpeg -f concat -i fileList.txt -c copy mergedVideo.mp4
// see: https://filme.imyfone.com/video-editing-tips/how-to-merge-or-combine-videos-using-ffmpeg/, 'Part 2: Advanced Tutorial- Three Ways to Concatenate MP4 Videos with FFmpeg Like a Pro'
const args = [
    '-f', 'concat',
    '-i', 'order.txt',
    '-c', 'copy', 
    '-y',
    'result.mp4'
]

// create an instance of ffmpeg, returns an event emitter
// see: https://nodejs.org/api/child_process.html, chapter 'child_process.spawn(command[, args][, options])'
const options = {
    cwd: `${process.cwd()}/data`,
    windowsHide: false
}

const ffmpeg = spawn(path, args, options);

// various supported event emitters of spawning a process
ffmpeg.on('spawn', () => {
    console.log('Spawned ffmpeg!')
})

ffmpeg.on('message', (message) => {
    console.log(`Received a message from ffmpeg: ${message}`)
})

ffmpeg.on('error', (err) => {
    console.error('Failed to start ffmpeg.');
    console.error(err)
})

ffmpeg.on('exit', (code) => {
    console.log(`Closed ffmpeg with code: ${code}`)
});

// standard output stream
ffmpeg.stdout.on('data', (data) => {
    console.log(`${data}`)
});

// error output stream
ffmpeg.stderr.on('data', (data) => {
    console.error(`${data}`)
});
