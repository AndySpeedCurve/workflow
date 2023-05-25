export function getAnimalDescription(animalName: string): string {
    switch(animalName){
        case "rabbit":
            return "A gregarious burrowing plant-eating mammal, with long ears, long hind legs, and a short tail.";
            break;
        case "kiwi":
            return "A flightless New Zealand bird with hairlike feathers, having a long downcurved bill with sensitive nostrils at the tip.";
            break;
        case "cat":
            return "A small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws. It is widely kept as a pet or for catching mice, and many breeds have been developed.";
            break;
        default:
            return "What the heck is that?";
    }
}

export function getAnimalPhoto(animalName: string): string {
    switch(animalName){
        case "rabbit":
            return "/image/rabbit.jpg";
            break;
        case "kiwi":
            return "/image/kiwi.jpg";
            break;
        case "cat":
            return "/image/cat.jpg";
            break;
        default:
            return "/image/monster.jpg";
    }
}

