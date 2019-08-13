#!/bin/bash

OK="OK"
ERROR="ERROR"
yarnRegistry="registry.yarnpkg.com"
npmRegistry="registry.npmjs.org"

npmPingStatus=`ping -c 1 $npmRegistry > /dev/null && echo $OK || echo $ERROR`
yarnPingStatus=`ping -c 1 $yarnRegistry > /dev/null && echo $OK || echo $ERROR`

yarnHttpStatus=`curl "https://"$yarnRegistry -k -s -f -o /dev/null && echo $OK || echo $ERROR`
npmHttpStatus=`curl "https://"$npmRegistry -k -s -f -o /dev/null && echo $OK || echo $ERROR`

echo "yarn ping status: $yarnPingStatus"
echo "yarn http status: $yarnHttpStatus"

echo "npm ping status: $npmPingStatus"
echo "npm http status: $npmHttpStatus"

if [ $yarnHttpStatus = $OK ] ; then
   yarn install --cwd ../

else if [ $npmHttpStatus = $OK ] ; then
   npm install

else
   echo "Network failure"

fi
fi
