#!/bin/bash

I=1
while [ $I -gt 0 ]
do
	echo "Type in the name of this product"
	read NAME
	echo "Type in the unit of this product"
	read UNIT
	echo "Type in the category of this product"
	read CATEGORY
	echo "Type in the subCategory of this product"
	read SUBCATEGORY
	echo "Type in the price of this product"
	read PRICE
	if [ $I -lt 10 ]
	then
		BARCODE="ITEM00000${I}"
	elif [ $I -ge 10 -a $I -lt 100 ]
	then
		BARCODE='ITEM0000${I}'
	elif [ $I -ge 100 -a $I -lt 1000 ]
	then
		BARCODE='ITEM000${I}'
	elif [ $I -ge 1000 -a $I -lt 10000 ]
	then
		BARCODE='ITEM00${I}'
	else
		BARCODE='ITEM0${I}'
	fi
	echo "{ barcode: '${BARCODE}', name: '${NAME}', unit: '${UNIT}', category: '${CATEGORY}', subCategory: '${SUBCATEGORY}', price: '${PRICE}' }" >> products.json
	echo "{ barcode: '${BARCODE}', name: '${NAME}', unit: '${UNIT}', category: '${CATEGORY}', subCategory: '${SUBCATEGORY}', price: '${PRICE}' }"
	I=`expr $I + 1`
done
