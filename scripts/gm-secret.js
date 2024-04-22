class GMSecret {
    static ID = 'gm-secret';
    
    static log(...args) {  
        console.log(this.ID, '|', ...args);
    }
};

Hooks.on("ready", async () => {
    GMSecret.log('ready!');

    //push CSS to style sheet for ProseMirror

    if (game.user.isGM) {
        // Add GM Secret section type
        
        // If the user is a GM, add a unique class to the body of the document so that we can selectively hide content when this class doesn't exist.
        $("body").addClass("game-master");
    }


});

Hooks.on("getProseMirrorMenuItems", async () => {
    GMSecret.log('getProseMirrorMenuItems!');

    //push CSS to style sheet for ProseMirror

    if (game.user.isGM) {
        // Add GM Secret section type
        
        // If the user is a GM, add a unique class to the body of the document so that we can selectively hide content when this class doesn't exist.
        $("body").addClass("game-master");
    }


});

Hooks.on("getProseMirrorMenuDropDowns", async () => {
    GMSecret.log('getProseMirrorMenuDropDowns!');

    //push CSS to style sheet for ProseMirror

    if (game.user.isGM) {
        // Add GM Secret section type
        
        // If the user is a GM, add a unique class to the body of the document so that we can selectively hide content when this class doesn't exist.
        $("body").addClass("game-master");
    }

    
});