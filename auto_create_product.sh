#!/bin/bash

I=1
while [ $I -gt 0 ]
do
	echo "Type in the price of this barcode"
	read BARCODE
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
	echo "Type in the price of this discount"
	read DISCOUNT
	echo "{ \"barcode\": \"${BARCODE}\", \"name\": \"${NAME}\", \"unit\": \"${UNIT}\", \"category\": \"${CATEGORY}\", \"subCategory\": \"${SUBCATEGORY}\", \"price\": \"${PRICE}\",\"discount\":\"${DISCOUNT}\" }" >> products.json
	echo "{ barcode: '${BARCODE}', name: '${NAME}', unit: '${UNIT}', category: '${CATEGORY}', subCategory: '${SUBCATEGORY}', price: '${PRICE}',discount: '${discount}' }"
	I=`expr $I + 1`
done
