let restoranas = {
    name: 'Inkaras',
    tableSpaces: {
        free: 20,
        reserved: 0
    },

    toReserve: function (number){
        if(number <= this.tableSpaces.free){
            this.tableSpaces.free -= number;
            this.tableSpaces.reserved += number;
        }else{
            alert("nepakanka laisvu vietu!")
        }
    },

    toCancelReservation: function (number){
        if(number <= this.tableSpaces.reserved){
            this.tableSpaces.free += number;
            this.tableSpaces.reserved -= number;
        }else{
            alert('nera tiek rezervuotu vietu');
        }
    }
}
