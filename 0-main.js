#!/usr/bin/node
import getNeighborhoodsList from './0x00-ES6_basic/2-arrow';

// eslint-disable-next-line new-cap
const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
