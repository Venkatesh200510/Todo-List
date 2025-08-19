This is a Simple JS project made using Tailwind CSS.<br>
You can run this by installing tailwind CSS CLI
<br>Steps to Install the CLI
1. npm install tailwindcss @tailwindcss/cli

Create a file named input.css in src folder ->src/input.css 
and copy this,<br>
2. @import "tailwindcss";

 then link the style sheet in html,<br>
  
3. <link href="./output.css" rel="stylesheet">

 Finally run this command in terminal,<br>
4. npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
  
---------------------------------------------------------------------------------------------------------------------------------------------------
 if you don't want to run the above command everytime just copy it in package.json file in script section below error message<br>

1. "dev": "npx @tailwindcss/cli -i ./src/input.css -o ./dist/style.css --watch"

  then run<br>
2. npm run dev <br>
    here you don't need to run repeatedly
