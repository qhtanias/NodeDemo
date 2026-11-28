module.exports = function(name , id, address ){
    this.name = name;
    this.id = id;
    this.address = address;
return this.id + ' ' + this.name + '  '+this.address ;
}