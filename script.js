/* 1.a) Get all the countries from the Asia continent /region using the Filter function:
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var data = request.response;
    var result=JSON.parse(data);
    var res=result.filter((ele)=>ele.continents=="Asia")
    var res1=res.map((ele)=>`${ele.region}`)
    console.log(res1)
}
//Output:
(52) ['Asia', 'Asia', 'Asia', 'Asia', 'Oceania', 'Asia', 'Asia', 'Asia', 'Africa', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Oceania', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia']

----------------------------------------------------------------------
1.b) Get all the countries with a population of less than 2 lakhs using Filter function:
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var data=request.response;
    var result =JSON.parse(data);
    var res = result.filter((ele)=>ele.population<200000)
    var res1=res.map((ele)=>`${ele.population}:${ele.name.common}`)
    console.log(res1)
}
Output:
(62) ['106766:Aruba', '11750:Wallis and Futuna', '29458:Åland Islands', '56:Pitcairn Islands', '98462:Seychelles', '400:French Southern and Antarctic Lands', '2072:Christmas Island', '38659:Saint Martin', '0:Heard Island and McDonald Islands', '1000:Antarctica', '56367:Greenland', '3000:British Indian Ocean Territory', '183629:Saint Lucia', '1470:Niue', '4255:Saint Barthélemy', '112519:Grenada', '85032:Isle of Man', '155014:Curaçao', '71991:Dominica', '48865:Faroe Islands', '4922:Montserrat', '18100:Cook Islands', '63903:Bermuda', '33938:San Marino', '65720:Cayman Islands', '544:Cocos (Keeling) Islands', '106290:United States Virgin Islands', '2302:Norfolk Island', '10834:Nauru', '0:Bouvet Island', '115021:Micronesia', '55197:American Samoa', '13452:Anguilla', '59194:Marshall Islands', '119446:Kiribati', '57557:Northern Mariana Islands', '168783:Guam', '33691:Gibraltar', '451:Vatican City', '100800:Jersey', '11792:Tuvalu', '53192:Saint Helena, Ascension and Tristan da Cunha', '198410:Samoa', '62999:Guernsey', '105697:Tonga', '53192:Saint Kitts and Nevis', '2563:Falkland Islands', '18092:Palau', '38718:Turks and Caicos Islands', '30237:British Virgin Islands', '38137:Liechtenstein', '77265:Andorra', '1411:Tokelau', '40812:Sint Maarten', '300:United States Minor Outlying Islands', '97928:Antigua and Barbuda', '6069:Saint Pierre and Miquelon', '110947:Saint Vincent and the Grenadines', '30:South Georgia', '25987:Caribbean Netherlands', '39244:Monaco', '2562:Svalbard and Jan Mayen']
------------------------------------------------------------------------
1.c) Print the following details name, capital, flag using forEach function:
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data);
    var res =result.forEach((ele)=>{console.log(`${ele.name.common}: ${ele.capital}: ${ele.flag}`)});

}
Output:
Mauritania: Nouakchott: 🇲🇷
script.js:16 Aruba: Oranjestad: 🇦🇼
script.js:16 Argentina: Buenos Aires: 🇦🇷
script.js:16 Sweden: Stockholm: 🇸🇪
script.js:16 Maldives: Malé: 🇲🇻
script.js:16 Mexico: Mexico City: 🇲🇽
script.js:16 New Zealand: Wellington: 🇳🇿
script.js:16 Ecuador: Quito: 🇪🇨
script.js:16 Wallis and Futuna: Mata-Utu: 🇼🇫
script.js:16 Åland Islands: Mariehamn: 🇦🇽
script.js:16 Montenegro: Podgorica: 🇲🇪
script.js:16 Pakistan: Islamabad: 🇵🇰
script.js:16 Pitcairn Islands: Adamstown: 🇵🇳
script.js:16 Zambia: Lusaka: 🇿🇲
script.js:16 Seychelles: Victoria: 🇸🇨
script.js:16 Malaysia: Kuala Lumpur: 🇲🇾
script.js:16 Norway: Oslo: 🇳🇴
script.js:16 Uzbekistan: Tashkent: 🇺🇿
script.js:16 Vanuatu: Port Vila: 🇻🇺
script.js:16 French Southern and Antarctic Lands: Port-aux-Français: 🇹🇫
script.js:16 Christmas Island: Flying Fish Cove: 🇨🇽
script.js:16 Singapore: Singapore: 🇸🇬
script.js:16 Suriname: Paramaribo: 🇸🇷
script.js:16 Western Sahara: El Aaiún: 🇪🇭
script.js:16 Saint Martin: Marigot: 🇲🇫
script.js:16 Costa Rica: San José: 🇨🇷
script.js:16 Heard Island and McDonald Islands: undefined: 🇭🇲
script.js:16 Ireland: Dublin: 🇮🇪
script.js:16 Antarctica: undefined: 🇦🇶
script.js:16 Australia: Canberra: 🇦🇺
script.js:16 Libya: Tripoli: 🇱🇾
script.js:16 Qatar: Doha: 🇶🇦
script.js:16 Greenland: Nuuk: 🇬🇱
script.js:16 Mauritius: Port Louis: 🇲🇺
script.js:16 Kazakhstan: Nur-Sultan: 🇰🇿
script.js:16 British Indian Ocean Territory: Diego Garcia: 🇮🇴
script.js:16 Albania: Tirana: 🇦🇱
script.js:16 Bahrain: Manama: 🇧🇭
script.js:16 Papua New Guinea: Port Moresby: 🇵🇬
script.js:16 Burundi: Gitega: 🇧🇮
script.js:16 India: New Delhi: 🇮🇳
script.js:16 Uruguay: Montevideo: 🇺🇾
script.js:16 Saint Lucia: Castries: 🇱🇨
script.js:16 Barbados: Bridgetown: 🇧🇧
script.js:16 New Caledonia: Nouméa: 🇳🇨
script.js:16 Latvia: Riga: 🇱🇻
script.js:16 Estonia: Tallinn: 🇪🇪
script.js:16 Niue: Alofi: 🇳🇺
script.js:16 Saint Barthélemy: Gustavia: 🇧🇱
script.js:16 Puerto Rico: San Juan: 🇵🇷
script.js:16 Grenada: St. George's: 🇬🇩
script.js:16 Macau: undefined: 🇲🇴
script.js:16 Cyprus: Nicosia: 🇨🇾
script.js:16 Isle of Man: Douglas: 🇮🇲
script.js:16 Greece: Athens: 🇬🇷
script.js:16 Syria: Damascus: 🇸🇾
script.js:16 Lithuania: Vilnius: 🇱🇹
script.js:16 Curaçao: Willemstad: 🇨🇼
script.js:16 Dominica: Roseau: 🇩🇲
script.js:16 Niger: Niamey: 🇳🇪
script.js:16 Kyrgyzstan: Bishkek: 🇰🇬
script.js:16 Trinidad and Tobago: Port of Spain: 🇹🇹
script.js:16 Togo: Lomé: 🇹🇬
script.js:16 Palestine: Ramallah,Jerusalem: 🇵🇸
script.js:16 Madagascar: Antananarivo: 🇲🇬
script.js:16 Croatia: Zagreb: 🇭🇷
script.js:16 Faroe Islands: Tórshavn: 🇫🇴
script.js:16 Haiti: Port-au-Prince: 🇭🇹
script.js:16 Montserrat: Plymouth: 🇲🇸
script.js:16 Cook Islands: Avarua: 🇨🇰
script.js:16 Timor-Leste: Dili: 🇹🇱
script.js:16 Martinique: Fort-de-France: 🇲🇶
script.js:16 Cuba: Havana: 🇨🇺
script.js:16 Taiwan: Taipei: 🇹🇼
script.js:16 Eswatini: Mbabane: 🇸🇿
script.js:16 Ukraine: Kyiv: 🇺🇦
script.js:16 Bermuda: Hamilton: 🇧🇲
script.js:16 South Korea: Seoul: 🇰🇷
script.js:16 Peru: Lima: 🇵🇪
script.js:16 Iraq: Baghdad: 🇮🇶
script.js:16 Moldova: Chișinău: 🇲🇩
script.js:16 San Marino: City of San Marino: 🇸🇲
script.js:16 Venezuela: Caracas: 🇻🇪
script.js:16 Guyana: Georgetown: 🇬🇾
script.js:16 Cayman Islands: George Town: 🇰🇾
script.js:16 Cambodia: Phnom Penh: 🇰🇭
script.js:16 Cocos (Keeling) Islands: West Island: 🇨🇨
script.js:16 Malta: Valletta: 🇲🇹
script.js:16 Sri Lanka: Sri Jayawardenepura Kotte: 🇱🇰
script.js:16 Israel: Jerusalem: 🇮🇱
script.js:16 Sudan: Khartoum: 🇸🇩
script.js:16 United States Virgin Islands: Charlotte Amalie: 🇻🇮
script.js:16 Eritrea: Asmara: 🇪🇷
script.js:16 Mali: Bamako: 🇲🇱
script.js:16 Somalia: Mogadishu: 🇸🇴
script.js:16 Norfolk Island: Kingston: 🇳🇫
script.js:16 Comoros: Moroni: 🇰🇲
script.js:16 Nicaragua: Managua: 🇳🇮
script.js:16 Russia: Moscow: 🇷🇺
script.js:16 Uganda: Kampala: 🇺🇬
script.js:16 Nauru: Yaren: 🇳🇷
script.js:16 Switzerland: Bern: 🇨🇭
script.js:16 Portugal: Lisbon: 🇵🇹
script.js:16 Tajikistan: Dushanbe: 🇹🇯
script.js:16 South Sudan: Juba: 🇸🇸
script.js:16 Bouvet Island: undefined: 🇧🇻
script.js:16 Micronesia: Palikir: 🇫🇲
script.js:16 American Samoa: Pago Pago: 🇦🇸
script.js:16 Czechia: Prague: 🇨🇿
script.js:16 Botswana: Gaborone: 🇧🇼
script.js:16 Tunisia: Tunis: 🇹🇳
script.js:16 Anguilla: The Valley: 🇦🇮
script.js:16 Guinea-Bissau: Bissau: 🇬🇼
script.js:16 Slovakia: Bratislava: 🇸🇰
script.js:16 Marshall Islands: Majuro: 🇲🇭
script.js:16 Algeria: Algiers: 🇩🇿
script.js:16 Jamaica: Kingston: 🇯🇲
script.js:16 Mozambique: Maputo: 🇲🇿
script.js:16 Spain: Madrid: 🇪🇸
script.js:16 Honduras: Tegucigalpa: 🇭🇳
script.js:16 Netherlands: Amsterdam: 🇳🇱
script.js:16 South Africa: Pretoria,Bloemfontein,Cape Town: 🇿🇦
script.js:16 Azerbaijan: Baku: 🇦🇿
script.js:16 North Macedonia: Skopje: 🇲🇰
script.js:16 Gambia: Banjul: 🇬🇲
script.js:16 Liberia: Monrovia: 🇱🇷
script.js:16 Luxembourg: Luxembourg: 🇱🇺
script.js:16 Cape Verde: Praia: 🇨🇻
script.js:16 Bahamas: Nassau: 🇧🇸
script.js:16 Georgia: Tbilisi: 🇬🇪
script.js:16 Kiribati: South Tarawa: 🇰🇮
script.js:16 Tanzania: Dodoma: 🇹🇿
script.js:16 China: Beijing: 🇨🇳
script.js:16 Guatemala: Guatemala City: 🇬🇹
script.js:16 São Tomé and Príncipe: São Tomé: 🇸🇹
script.js:16 Germany: Berlin: 🇩🇪
script.js:16 Sierra Leone: Freetown: 🇸🇱
script.js:16 Chad: N'Djamena: 🇹🇩
script.js:16 United Kingdom: London: 🇬🇧
script.js:16 Slovenia: Ljubljana: 🇸🇮
script.js:16 Thailand: Bangkok: 🇹🇭
script.js:16 Indonesia: Jakarta: 🇮🇩
script.js:16 Northern Mariana Islands: Saipan: 🇲🇵
script.js:16 Guam: Hagåtña: 🇬🇺
script.js:16 Finland: Helsinki: 🇫🇮
script.js:16 Mayotte: Mamoudzou: 🇾🇹
script.js:16 Gibraltar: Gibraltar: 🇬🇮
script.js:16 Turkmenistan: Ashgabat: 🇹🇲
script.js:16 Kosovo: Pristina: 🇽🇰
script.js:16 Ivory Coast: Yamoussoukro: 🇨🇮
script.js:16 Morocco: Rabat: 🇲🇦
script.js:16 Dominican Republic: Santo Domingo: 🇩🇴
script.js:16 Ghana: Accra: 🇬🇭
script.js:16 Vatican City: Vatican City: 🇻🇦
script.js:16 Jersey: Saint Helier: 🇯🇪
script.js:16 Turkey: Ankara: 🇹🇷
script.js:16 Tuvalu: Funafuti: 🇹🇻
script.js:16 Iran: Tehran: 🇮🇷
script.js:16 Egypt: Cairo: 🇪🇬
script.js:16 Denmark: Copenhagen: 🇩🇰
script.js:16 Kenya: Nairobi: 🇰🇪
script.js:16 Bulgaria: Sofia: 🇧🇬
script.js:16 Zimbabwe: Harare: 🇿🇼
script.js:16 Angola: Luanda: 🇦🇴
script.js:16 Nigeria: Abuja: 🇳🇬
script.js:16 Poland: Warsaw: 🇵🇱
script.js:16 Senegal: Dakar: 🇸🇳
script.js:16 Saint Helena, Ascension and Tristan da Cunha: Jamestown: 🇸🇭
script.js:16 Lebanon: Beirut: 🇱🇧
script.js:16 Samoa: Apia: 🇼🇸
script.js:16 Philippines: Manila: 🇵🇭
script.js:16 Guernsey: St. Peter Port: 🇬🇬
script.js:16 El Salvador: San Salvador: 🇸🇻
script.js:16 Kuwait: Kuwait City: 🇰🇼
script.js:16 Tonga: Nuku'alofa: 🇹🇴
script.js:16 Oman: Muscat: 🇴🇲
script.js:16 Afghanistan: Kabul: 🇦🇫
script.js:16 Saint Kitts and Nevis: Basseterre: 🇰🇳
script.js:16 Central African Republic: Bangui: 🇨🇫
script.js:16 Serbia: Belgrade: 🇷🇸
script.js:16 Armenia: Yerevan: 🇦🇲
script.js:16 Bangladesh: Dhaka: 🇧🇩
script.js:16 Laos: Vientiane: 🇱🇦
script.js:16 Chile: Santiago: 🇨🇱
script.js:16 French Polynesia: Papeetē: 🇵🇫
script.js:16 Panama: Panama City: 🇵🇦
script.js:16 United States: Washington, D.C.: 🇺🇸
script.js:16 Nepal: Kathmandu: 🇳🇵
script.js:16 Myanmar: Naypyidaw: 🇲🇲
script.js:16 Falkland Islands: Stanley: 🇫🇰
script.js:16 Hungary: Budapest: 🇭🇺
script.js:16 Palau: Ngerulmud: 🇵🇼
script.js:16 Equatorial Guinea: Malabo: 🇬🇶
script.js:16 Guinea: Conakry: 🇬🇳
script.js:16 United Arab Emirates: Abu Dhabi: 🇦🇪
script.js:16 Turks and Caicos Islands: Cockburn Town: 🇹🇨
script.js:16 British Virgin Islands: Road Town: 🇻🇬
script.js:16 Liechtenstein: Vaduz: 🇱🇮
script.js:16 Bosnia and Herzegovina: Sarajevo: 🇧🇦
script.js:16 Malawi: Lilongwe: 🇲🇼
script.js:16 Bhutan: Thimphu: 🇧🇹
script.js:16 Cameroon: Yaoundé: 🇨🇲
script.js:16 Andorra: Andorra la Vella: 🇦🇩
script.js:16 Guadeloupe: Basse-Terre: 🇬🇵
script.js:16 Republic of the Congo: Brazzaville: 🇨🇬
script.js:16 Réunion: Saint-Denis: 🇷🇪
script.js:16 Burkina Faso: Ouagadougou: 🇧🇫
script.js:16 Jordan: Amman: 🇯🇴
script.js:16 DR Congo: Kinshasa: 🇨🇩
script.js:16 Tokelau: Fakaofo: 🇹🇰
script.js:16 Vietnam: Hanoi: 🇻🇳
script.js:16 Sint Maarten: Philipsburg: 🇸🇽
script.js:16 Belgium: Brussels: 🇧🇪
script.js:16 United States Minor Outlying Islands: Washington DC: 🇺🇲
script.js:16 Brazil: Brasília: 🇧🇷
script.js:16 Belize: Belmopan: 🇧🇿
script.js:16 Antigua and Barbuda: Saint John's: 🇦🇬
script.js:16 Paraguay: Asunción: 🇵🇾
script.js:16 Benin: Porto-Novo: 🇧🇯
script.js:16 Brunei: Bandar Seri Begawan: 🇧🇳
script.js:16 Bolivia: Sucre: 🇧🇴
script.js:16 Djibouti: Djibouti: 🇩🇯
script.js:16 French Guiana: Cayenne: 🇬🇫
script.js:16 Canada: Ottawa: 🇨🇦
script.js:16 Saint Pierre and Miquelon: Saint-Pierre: 🇵🇲
script.js:16 Japan: Tokyo: 🇯🇵
script.js:16 Rwanda: Kigali: 🇷🇼
script.js:16 Saint Vincent and the Grenadines: Kingstown: 🇻🇨
script.js:16 Iceland: Reykjavik: 🇮🇸
script.js:16 Belarus: Minsk: 🇧🇾
script.js:16 Hong Kong: City of Victoria: 🇭🇰
script.js:16 Lesotho: Maseru: 🇱🇸
script.js:16 Fiji: Suva: 🇫🇯
script.js:16 Austria: Vienna: 🇦🇹
script.js:16 Colombia: Bogotá: 🇨🇴
script.js:16 Gabon: Libreville: 🇬🇦
script.js:16 Saudi Arabia: Riyadh: 🇸🇦
script.js:16 South Georgia: King Edward Point: 🇬🇸
script.js:16 Ethiopia: Addis Ababa: 🇪🇹
script.js:16 Caribbean Netherlands: Kralendijk: 🇧🇶
script.js:16 Monaco: Monaco: 🇲🇨
script.js:16 North Korea: Pyongyang: 🇰🇵
script.js:16 Italy: Rome: 🇮🇹
script.js:16 Namibia: Windhoek: 🇳🇦
script.js:16 Mongolia: Ulan Bator: 🇲🇳
script.js:16 Solomon Islands: Honiara: 🇸🇧
script.js:16 Yemen: Sana'a: 🇾🇪
script.js:16 Romania: Bucharest: 🇷🇴
script.js:16 Svalbard and Jan Mayen: Longyearbyen: 🇸🇯
script.js:16 France: Paris: 🇫🇷
-------------------------------------------------------------------------
1.d) Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var data = request.response
    var result = JSON.parse(data);
    var res = result.reduce((acc,cv)=>acc+cv.population,0);
    console.log(res);
}
Output:
7777721563
----------------------------------------------------------------------
1.e) Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var data = request.response;
    var result =JSON.parse(data);
    var res=result.filter((ele)=>{
        for(var key in ele.currencies){
            if(ele.currencies[key].code==="USD"){
                console.log(ele.name)
            }
        }
    })
}
Output:
American Samoa
script.js:28 Bonaire, Sint Eustatius and Saba
script.js:28 British Indian Ocean Territory
script.js:28 Virgin Islands (British)
script.js:28 Virgin Islands (U.S.)
script.js:28 Cambodia
script.js:28 Ecuador
script.js:28 El Salvador
script.js:28 Guam
script.js:28 Marshall Islands
script.js:28 Micronesia (Federated States of)
script.js:28 Northern Mariana Islands
script.js:28 Palau
script.js:28 Panama
script.js:28 Puerto Rico
script.js:28 Timor-Leste
script.js:28 Turks and Caicos Islands
script.js:28 United States of America
-----------------------------------------------------*/