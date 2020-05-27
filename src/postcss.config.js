const tailwindcss = require ('tailwindcss');

module.exports = { 
    plugins: [ 
        //tailwindcss ('tailwind'), 
        tailwindcss ('./tailwind.config.js'), 
        require ('autoprefixer'), 
      
    ], 
};