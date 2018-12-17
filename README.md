# CodeStyle
A web application that makes customized suggestions to improve the legibility of code. Currently supports Python and will suggest formatting tips such as proper code indentation and blocking.

## Motivation
CodeStyle aims to help people overcome a fundamental barrier to learning programming: good coding style.

## Tech/framework used
Built with the latest version of React as a frontend and utilizes Flask as a backend.

## Features
While most existing code formatters transform the user’s code without providing explanations behind the changes, this tool helps the user improve their coding style by supplying them with the reasoning behind any formatting suggestions.

## Installation
To build the latest working version on your local machine, `cd` to the project directory.

* `cd` into the `static` directory and run `npm run watch` to let `webpack` build the web app

* `cd` into the `server` directory and then run `python server.py` to start the web server

Once done, navigate to `localhost:5000` in your favorite browser to open the application.

## Future Implementations
We hope to extend CodeStyle to support other languages.

## Credits
Made by Gabriella Roman and Christopher Trinh as part of the Spark! Fellowship at Boston University. `pycodestyle` can be found at its [Github repo](https://github.com/PyCQA/pycodestyle).
