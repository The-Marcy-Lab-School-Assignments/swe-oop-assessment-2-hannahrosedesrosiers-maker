class Pokemon {
  static allPokemon = [];

  #health = 100;

  #level = 1;

  constructor(name, type) {
    this.name = name;
    this.type = type;
    Pokemon.allPokemon.push(this);
  }

  get health() {
    return this.#health;
  }

  get level() {
    return this.#level;
  }

  levelUp() {
    this.#level += 1;
    this.#health += 10;

    console.log(`${this.name} leveled up to level ${this.#level}!`);
  }

  isFainted() {
    return this.#health <= 0;
  }

  attack(targetPokemon) {
    const damage = 10 * this.#level;
    targetPokemon.#health -= damage;

    console.log(`${this.name} attacked ${targetPokemon}!`);
  }

  static getTotalPokemon() {
    return Pokemon.allPokemon.length;
  }

  static fiindByName(name) {
    return Pokemon.allPokemon.filter((p) => p.name === name);
  }
}
