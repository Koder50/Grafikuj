# Grafikuj

Grafikuj – a web application built with Angular that allows drawing on an HTML Canvas.
The name is a combination of Polish words: grafika (graphics) + maluj (paint).

The project was created a few years ago during my learning journey in programming. It uses Angular 9 / Node 12 and is considered an archival learning project.

## Live Demo

https://karolgoralczyk.pl/grafikuj/

## Features

- Drawing on Canvas( e.g. as big as needed polygon)
- Fill tool with tolerance support and different filling modes
- Outline / Fill mode
- Input coordinates for precise drawing
- Autosave every 15 minutes (files saved to the Downloads folder)
- Image filters (apply multiple filters sequentially with option to revert to original)
- Support for multiple graphics at once
- Desktop-style UI + responsive design

## Table of Contents
- [Grafikuj](#Grafikuj) 
- [Live Demo](#live-demo) 
- [Features](#Features) 
- [Table of Contents](#table-of-contents) 
- [Screenshots](#Screenshots) 
- [Technologies](#Technologies) 
- [Installation and Usage](#installation-and-usage) 
- [Project Status](#project-status) 
- [Challenges](#Challenges)
- [Instruction for use](#instruction-for-use) 

## Screenshots

<img width="1912" height="926" alt="grafikuj1" src="https://github.com/user-attachments/assets/b5514521-2df1-4458-9050-95dd77a2ee72" />
<img width="1912" height="948" alt="grafikuj2" src="https://github.com/user-attachments/assets/c0b6db2a-fd74-44a5-b77e-2b5946652533" />
<img width="1918" height="973" alt="grafikuj3" src="https://github.com/user-attachments/assets/560758a9-e9f2-41f9-ba18-8212d9220129" />
<img width="1912" height="966" alt="grafikuj4" src="https://github.com/user-attachments/assets/f7a055f4-98b9-40f5-930c-c3a065f42c3d" />

https://github.com/user-attachments/assets/34d09757-fb65-48af-9931-291ff85443e5

Polygon painting


## Technologies

- Angular
- CSS
- HTML
- Typescript
- Javascript
- Node

## Installation and Usage

At start run `npm install`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Project Status

- Archived / Legacy project – last code update: ~4 years ago

- Created as part of my frontend learning

- Needs refactoring (modularity, newer Angular version, better architecture)

## Challenges

1. Make it possible to paint( HTML Canvas)
2. Make all functions working
3. Make beautiful and esthetic UI
4. Make polygon function
5. Make Coordinates function
6. Make Cursor changing
7. Make Filling or Outline changing
8. Make color filling algorithm
9. Make filters
10. Make working on multiple graphics in one place(instead of buffer)
11. Make Autosave
12. Make app looking like desktop
13. Make app responsive
14. Many others

## Instruction for use

1) Grafikuj user interface, there are Polish words.
2) There is 'Autozapis' (autosave) every 15 minutes. If you click on it you can choose or switch off that option. It is every time saved in 'Downloads' folder.
3) Every function has its label - you have to be on the function and wait few seconds.
4) Functions can be painted directly (depends on what they do) or painted with use of 'Wpisz współrzędne' (coordinates), you have to choose this option.
5) 'Wielokąt' (polygon) can have a lot of sides(how many you need). You have to put last side end in first side start and that is finish.
   There is also 'tolerancja' (tolerance), if you choose it, that means that last side end and first side start can be different no more than 5px both
   (for example start point 1px - x, 2px - y, tolerance 5px is when end point for instance 4px - x, 7px - y; 4px - 1px = 3px, 7px - 5px=2px 3px + 2px = 5px, so max)
6) When using function and going with cursor outside of working space, the last painted function but not finished disappears forever. If you want to finish each function, you have to not go with the cursor outside of working space before it is done.    
7) Generally,when function is correctly chosen, it is red and is spinning.
8) Some functions like 'Ołówek' (pencil) when are chosen, you can directly click on another when you want to switch and it is then chosen. But sometimes you have to click now chosen function again(second time) and then click another function to choose it. That's because, for example when you use 'Prostokąt' (rectangle) and choose 'Wpisz współrzędne' (coordinates) there is shown modal window helping you use this function. You can move this window. When you click rectangle again, the window disappears but its position is remembered and next time you use it, it will be in the same place it was closed. When you click instead on 'Anuluj' (Cancel) or 'Ok' or close it with cross, the position is not remembered.
9) There you can also choose 'Tylko obrys' (only border) of the function or not choose and then it is border with filling. Or you can choose 'Kursor tylko zwykły' (cursor only original, ordinary) and then it is ordinary cursor. If you not click it, the cursor is connected with the function chosen.
10) There are filters ('Filtry'), you choose one and than you have to save the file. And then you can open the file and put another filter on it etc.
    If you want to go back without filter, you have to choose 'Filtr oryginalny' (Original filter) and everything is still ready to use again
11) When talking about opening files: You have to choose 'Otwórz Plik' and select option 'Czy tylko nowy'(only new picture) and there will be only one picture.
    But if you for example need to work on many files, it does not matter how you open first picture, another one you have to not choose that option and then you will have first picture and second picture next to first and you can do like this many times.
12) There is also 'Wypełnienie' (filling) of shape on the picture. I advise to use coordinates ('Wpisz współrzędne) Then you can choose 'Tolerancja' (tolerance) it means, filling will be made not only on the same color, but also on similiar ones. 255 value it will fill everything on picture, every color, 0 it will fill only the current chosen colour.
Second option to choose('Czy jeden pion, specyficzne, szybsze'), you have to experiment with it, when chosen, for shapes like not closed fence it is faster. But bad used it not works correct. In general I advise not use it and everything will be filled correct in its needed time.
And of course you have to select point which should start filling ('punkt').
13) There are a lot of other functions, I talked about the most important ones and maybe difficult ones to understand all by your own. I am sure other things you can experiment or understand in simple way. Good luck

