# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple MP3 player web application for English language learning. It presents a playlist of MP3 files that users can play, pause, and track their listening progress.

## Codebase Structure

- `index.html` - Main HTML file that loads the application
- `script.js` - Main JavaScript file handling the MP3 player functionality
- `style.css` - Styling for the application UI
- `datas/` - Directory containing all the MP3 files for playback

## Key Features

1. MP3 playback with HTML5 audio elements
2. Playback position tracking using localStorage
3. Accumulated listening time tracking per file
4. Last played timestamp tracking
5. Automatic sorting of files by page number extracted from filenames
6. Cache clearing functionality

## Development

This is a client-side web application that runs directly in the browser. No build process is required - simply open `index.html` in a web browser to run the application.

## Important Implementation Details

- Playback data (current position, accumulated time, last played) is stored in localStorage under the key 'mp3PlaybackData'
- The application tracks accumulated listening time by calculating the difference between playSegmentStartTime and currentTime
- Files are sorted numerically based on the page number extracted from filenames (P## pattern)
- When one audio file is played, any currently playing file is automatically paused