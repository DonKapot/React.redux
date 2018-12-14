let sync_DB_State = (_newMen) => {
    sessionStorage.setItem('men', JSON.stringify(_newMen));
    let newManDB = JSON.parse(sessionStorage.getItem('men'));
    this.setState({ men: newManDB });
}

let addMan = (man) => {
    let checkExistID = this.state.men.find(m => m.id === man.id) === undefined && man.name && man.age;
    if (checkExistID) {
        let newMen = [...this.state.men, man];
        this.sync_DB_State(newMen);
    }
}

let delMan = (id, editInput) => {
    if (editInput === null) {
        let newMen = this.state.men.filter(m => m.id !== id);
        this.sync_DB_State(newMen);
    }
}

let changeMan = (id, type, val) => {
    let value = type === "name" ? val : Number(val);
    let filteredMen = this.state.men.filter(m => m.id !== id);
    let selectedMan = this.state.men.filter(m => m.id === id)[0];
    selectedMan[type] = value;
    let newMen = [...filteredMen, selectedMan];
    this.sync_DB_State(newMen);
}

export { sync_DB_State, addMan, delMan, changeMan };