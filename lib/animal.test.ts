import {getAnimalDescription} from "./animal";

describe("getAnimalDescription", () => {
    it("should return the description for 'rabbit'", () => {
        const description = getAnimalDescription("rabbit");
        expect(description).toBe("A gregarious burrowing plant-eating mammal, with long ears, long hind legs, and a short tail.");
    });

    it("should return the description for 'kiwi'", () => {
        const description = getAnimalDescription("kiwi");
        expect(description).toBe("A flightless New Zealand bird with hairlike feathers, having a long downcurved bill with sensitive nostrils at the tip.");
    });

    it("should return the description for 'cat'", () => {
        const description = getAnimalDescription("cat");
        expect(description).toBe("A small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws. It is widely kept as a pet or for catching mice, and many breeds have been developed.");
    });

    it("should return the default message for an unknown animal name", () => {
        const description = getAnimalDescription("unicorn");
        expect(description).toBe("What the heck is that?");
    });
});
