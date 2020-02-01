global.blackListCheck = function(itemToTest, event, player) {
    if (itemToTest) {
        var id = itemToTest.id.toString();
        /**
        	This is where you add the ID
        	of any item you want to have
        	blacklisted on your server.
        	
        	Start by adding a new line after
        	the "switch(id){" part and put
        	"case 'minecraft:whatever':".
        	and replace "minecraft:whatever"
        	with whatever item you want to
        	blacklist.
        */
        switch (id) {
            //case 'minecraft:stone':
            //case 'minecraft:stick':
            //case 'minecraft:bed':
            //case 'minecraft:dirt':
            case 'minecraft:tnt':
                if (player) {
                    if (player.isPlayer()) {
                        player.tell(["Item ", text.yellow(id), " has been ", text.red("removed"), ".\nReason: ", text.red("BlackListed"), " Item"]);
                    }
                }
                itemToTest.count = 0;
                event.cancel();
                break;
            default:
                break;
        }
    }
};
events.listen("item.right_click", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("item.left_click", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("item.pickup", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("item.toss", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("item.crafted", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("item.smelted", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("item.entity_interact", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("block.place", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("block.left_click", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
events.listen("block.right_click", function(event) {
    global.blackListCheck(event.item, event, event.player);
});
