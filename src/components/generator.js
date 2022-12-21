import React from 'react';

import { Button } from 'react-bootstrap';

export default class Generator extends React.Component {
    constructor() {
        super();
        this.prefixes = ["Dapple", "Fern", "Leaf", "Owl", "White", "Mouse", "Blossom", "Storm", "Holly", "Gray", "Stone", "Sparrow", "Pounce",
            "Sun", "Reed", "Night", "Gorse", "Willow", "Pine", "Jay", "Alder", "Thorn", "Birch", "Berry", "Cinder", "Ivy", "Eagle", "Dew",
            "Honey", "Sorrel", "Plum", "Cloud", "Bracken", "Clover", "Grass", "Ant", "Snake", "Slate", "Hawk", "Nettle", "Crow", "Smoke",
            "Breeze", "Lark", "Whisker", "Moth", "Minnow", "Ice", "Hare", "Tall", "Pebble", "Jagged", "Spotted", "Dust", "Toad", "Tiger",
            "Dawn", "Ash", "Black", "Rain", "Speckle", "One", "Running", "Mud", "Squirrel", "Fire", "Poppy", "Lion", "Rose", "Bristle",
            "Stem", "Lily", "Bumble", "Cherry", "Mole", "Flip", "Spark", "Twig", "Fin", "Shell", "Spot", "Fly", "Snap", "Daisy", "Bright",
            "Puddle", "Shadow", "Tawny", "Dove", "Strike", "Scorch", "Flax", "Snow", "Yarrow", "Whorl", "Hop", "Blaze", "Cinnamon", "Flower",
            "Light", "Frond", "Gull", "Spire", "Hollow", "Oak", "Freckle", "Fidget", "Tree", "Dew", "Sage", "Turtle", "Sandy", "Rabbit",
            "Mint", "Tiny", "Pale", "Violet", "Nectar", "Quail", "Pigeon", "Fringe", "Sunny", "Fallow", "Kestrel", "Brindle", "Ember",
            "Heather", "Crouch", "Sedge", "Slight", "Oat", "Hoot", "Feather", "Dusk", "Mallow", "Shimmer", "Lizard", "Sneeze", "Soft",
            "Haven", "Curl", "Moss", "Amber", "Juniper", "Rat", "Beetle", "Heron", "Clear", "Star", "Acorn", "Quick", "Lightning", "Pink",
            "Milk", "Thistle", "River", "Dappled", "Shattered", "Wind", "Raven", "Slash", "Bramble", "Sand", "Spider", "Hazel", "Fox", "Briar",
            "Rowan", "Little", "Apple", "Olive", "Shrew", "Red", "Ferret", "Starling", "Cedar", "Weasel", "Swallow", "Web", "Torn", "Robin",
            "Petal", "Smoky", "Long", "Russet", "Bark", "Dew", "Morning", "Misty", "Vole", "Beech", "Ripple", "Otter", "Heavy", "Blue",
            "Chirp", "Golden", "Boulder", "Rush", "Dark", "Frost", "Lost", "Small", "Dead", "Shade", "Loud", "Bone", "Barley", "Smudge"];
        this.suffixes = ["fur", "pelt", "tail", "claw", "foot", "heart", "wing", "nose", "whisker", "cloud", "feather", "leaf", "stripe",
            "frost", "ear", "leap", "tooth", "flower", "flight", "fall", "song", "shine", "step", "spring", "sky", "light", "storm", "pool",
            "tuft", "stone", "willow", "brook", "fern", "water", "eyes", "spots", "shadow", "face", "blaze", "petal", "branch", "shade",
            "sight", "bird", "fire", "stem", "swoop", "beam", "wish", "flake", "scratch", "crawl", "splash", "haze", "moon", "scar", "weed",
            "ripple", "ice", "peak", "runner", "muzzle", "leg", "poppy", "strike", "mist", "stream", "eye", "belly"];
    }

    state = {
        names: []
    }

    generatePrefix = () => {
        let prefix = "";
        let index = this.getRandomInt(this.prefixes.length);
        prefix = this.prefixes[index];
        return prefix;
    }

    generateSuffix = () => {
        let suffix = "";
        let index = this.getRandomInt(this.suffixes.length);
        suffix = this.suffixes[index];
        return suffix;
    }

    getRandomInt = (max) => {
        //gets random number and rounds it to nearest whole number
        return Math.floor(Math.random() * max);
    }

    generateName = () => {
        let name = "";
        let prefix = this.generatePrefix();
        let suffix = this.generateSuffix();

        //make sure prefix and suffix are not the same
        if (prefix.toLowerCase() == suffix){
            while (prefix.toLowerCase() == suffix){
                suffix = this.generateSuffix();
            }
        }

        name = prefix + suffix;
        return name;
    }

    generateOneName = (e) => {
        //generate name one time and push to array
        let name = this.generateName();
        let names = [];
        names.push(name);

        //store name in state
        this.setState({names});
    };

    generateTenNames = (e) => {
        //generate name ten times
        let names = [];
        for (let i = 0; i < 10; i++) {
            names.push(this.generateName());
        }

        //store names in state
        this.setState({names});
    }

    render() {
        return (
            <div className="center">
                <Button className="padding" variant="dark" onClick={this.generateOneName}>Generate 1 Name</Button>
                <Button className="padding" variant="dark" onClick={this.generateTenNames}>Generate 10 Names</Button>
                {this.state.names.map((name) => <p>{name}</p>)}
            </div>
        );
    }
}