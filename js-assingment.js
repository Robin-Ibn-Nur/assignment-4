/*----------------------
Problem:1 radianToDegree
----------------------*/

function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return 'please provide a valid number';
    } else {
        const convertDegree = radian * 57.2958;
        const returnValue = parseFloat(convertDegree.toFixed(2));
        return returnValue;
    }
    
}

/*--------------------------
Problem: 2  isJavaScriptFile
---------------------------*/

function isJavaScriptFile(jsFile) {
    if (typeof jsFile !== 'string') {
        return 'please provide stiring'
    }
    const string = jsFile;
    if (string.endsWith('.js')) {
        return true;
    }
    else {
        return false;
    }

}

/*-----------------
Problem 3: oilPrice
------------------*/

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    if (typeof (dieselQuantity && petrolQuantity && octaneQuantity) == 'number') {
        const perLiterDiesel = 114;
        const perLiterPetrol = 130;
        const perLitreOctane = 135;

        const diesel = perLiterDiesel * dieselQuantity;
        const petrol = perLiterPetrol * petrolQuantity;
        const octane = perLitreOctane * octaneQuantity;
        const totalCost = diesel + petrol + octane;
        return totalCost;
    } else {
        return 'please inter a valid number'
    }

}


/*----------------------
Problem 4: publicBusFare
-----------------------*/

function publicBusFare(people) {
    if (typeof people == 'number') {
        const busCapacity = 50;
        const microBusCapacity = 11;
        const publicBusTicketPrice = 250;
        const bigBusNeeded = people % busCapacity;
        const microBusNeeded = bigBusNeeded % microBusCapacity;
        const totalPublicBusCost = microBusNeeded * publicBusTicketPrice;
        return totalPublicBusCost;

    } else {
        return 'Please input a valid number'
    }

}

/*---------------------
Problem 5: isBestFriend
----------------------*/

function isBestFriend(x, y) {
    if ((x.name == y.friend) && (x.friend == y.name)) {
        return true;
    } else {
        return false;
    }

}