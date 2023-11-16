/*
 *
 * (c) Copyright Ascensio System Limited 2010-2023
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/


var CountriesManager = new function () {
    var countriesList =
    [
        { title: ASC.Resources.StudioCountriesResource.Afghanistan, key: "AF", country_code: "+93" },
        { title: ASC.Resources.StudioCountriesResource.Albania, key: "AL", country_code: "+355" },
        { title: ASC.Resources.StudioCountriesResource.Algeria, key: "DZ", country_code: "+213" },
        { title: ASC.Resources.StudioCountriesResource.AmericanSamoa, key: "AS", country_code: "+1684" },
        { title: ASC.Resources.StudioCountriesResource.Andorra, key: "AD", country_code: "+376" },
        { title: ASC.Resources.StudioCountriesResource.Angola, key: "AO", country_code: "+244" },
        { title: ASC.Resources.StudioCountriesResource.Anguilla, key: "AI", country_code: "+1264" },
        { title: ASC.Resources.StudioCountriesResource.AntiguaAndBarbuda, key: "AG", country_code: "+1268" },
        { title: ASC.Resources.StudioCountriesResource.Argentina, key: "AR", country_code: "+54" },
        { title: ASC.Resources.StudioCountriesResource.Armenia, key: "AM", country_code: "+374" },
        { title: ASC.Resources.StudioCountriesResource.Aruba, key: "AW", country_code: "+297" },
        { title: ASC.Resources.StudioCountriesResource.AscensionIsland, key: "AC", country_code: "+247" },
        { title: ASC.Resources.StudioCountriesResource.Australia, key: "AU", country_code: "+61" },
        { title: ASC.Resources.StudioCountriesResource.Austria, key: "AT", country_code: "+43", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Azerbaijan, key: "AZ", country_code: "+994" },
        { title: ASC.Resources.StudioCountriesResource.Bahamas, key: "BS", country_code: "+1242" },
        { title: ASC.Resources.StudioCountriesResource.Bahrain, key: "BH", country_code: "+973" },
        { title: ASC.Resources.StudioCountriesResource.Bangladesh, key: "BD", country_code: "+880" },
        { title: ASC.Resources.StudioCountriesResource.Barbados, key: "BB", country_code: "+1246" },
        { title: ASC.Resources.StudioCountriesResource.Belarus, key: "BY", country_code: "+375" },
        { title: ASC.Resources.StudioCountriesResource.Belgium, key: "BE", country_code: "+32", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Belize, key: "BZ", country_code: "+501" },
        { title: ASC.Resources.StudioCountriesResource.Benin, key: "BJ", country_code: "+229" },
        { title: ASC.Resources.StudioCountriesResource.Bermuda, key: "BM", country_code: "+1441" },
        { title: ASC.Resources.StudioCountriesResource.Bhutan, key: "BT", country_code: "+975" },
        { title: ASC.Resources.StudioCountriesResource.Bolivia, key: "BO", country_code: "+591" },
        { title: ASC.Resources.StudioCountriesResource.BonaireSintEustatiusAndSaba, key: "BQ", country_code: "+599" },
        { title: ASC.Resources.StudioCountriesResource.BosniaAndHerzegovina, key: "BA", country_code: "+387" },
        { title: ASC.Resources.StudioCountriesResource.Botswana, key: "BW", country_code: "+267" },
        { title: ASC.Resources.StudioCountriesResource.Brazil, key: "BR", country_code: "+55" },
        { title: ASC.Resources.StudioCountriesResource.BritishIndianOceanTerritory, key: "IO", country_code: "+246" },
        { title: ASC.Resources.StudioCountriesResource.BritishVirginIslands, key: "VG", country_code: "+1284" },
        { title: ASC.Resources.StudioCountriesResource.BruneiDarussalam, key: "BN", country_code: "+673" },
        { title: ASC.Resources.StudioCountriesResource.Bulgaria, key: "BG", country_code: "+359", vat: true },
        { title: ASC.Resources.StudioCountriesResource.BurkinaFaso, key: "BF", country_code: "+226" },
        { title: ASC.Resources.StudioCountriesResource.Burundi, key: "BI", country_code: "+257" },
        { title: ASC.Resources.StudioCountriesResource.Cambodia, key: "KH", country_code: "+855" },
        { title: ASC.Resources.StudioCountriesResource.Cameroon, key: "CM", country_code: "+237" },
        { title: ASC.Resources.StudioCountriesResource.Canada, key: "CA", country_code: "+1" },
        { title: ASC.Resources.StudioCountriesResource.CapeVerde, key: "CV", country_code: "+238" },
        { title: ASC.Resources.StudioCountriesResource.CaymanIslands, key: "KY", country_code: "+1345" },
        { title: ASC.Resources.StudioCountriesResource.CentralAfricanRepublic, key: "CF", country_code: "+236" },
        { title: ASC.Resources.StudioCountriesResource.Chad, key: "TD", country_code: "+235" },
        { title: ASC.Resources.StudioCountriesResource.Chile, key: "CL", country_code: "+56" },
        { title: ASC.Resources.StudioCountriesResource.China, key: "CN", country_code: "+86" },
        { title: ASC.Resources.StudioCountriesResource.Colombia, key: "CO", country_code: "+57" },
        { title: ASC.Resources.StudioCountriesResource.Comoros, key: "KM", country_code: "+269" },
        { title: ASC.Resources.StudioCountriesResource.CongoBrazzaville, key: "CG", country_code: "+242" },
        { title: ASC.Resources.StudioCountriesResource.CookIslands, key: "CK", country_code: "+682" },
        { title: ASC.Resources.StudioCountriesResource.CostaRica, key: "CR", country_code: "+506" },
        { title: ASC.Resources.StudioCountriesResource.Croatia, key: "HR", country_code: "+385", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Cuba, key: "CU", country_code: "+53" },
        { title: ASC.Resources.StudioCountriesResource.Curacao, key: "CW", country_code: "+599" },
        { title: ASC.Resources.StudioCountriesResource.Cyprus, key: "CY", country_code: "+357", vat: true },
        { title: ASC.Resources.StudioCountriesResource.CzechRepublic, key: "CZ", country_code: "+420", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Denmark, key: "DK", country_code: "+45", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Djibouti, key: "DJ", country_code: "+253" },
        { title: ASC.Resources.StudioCountriesResource.Dominica, key: "DM", country_code: "+1767" },
        { title: ASC.Resources.StudioCountriesResource.DominicanRepublic, key: "DO", country_code: "+1809" },
        { title: ASC.Resources.StudioCountriesResource.Ecuador, key: "EC", country_code: "+593" },
        { title: ASC.Resources.StudioCountriesResource.Egypt, key: "EG", country_code: "+20" },
        { title: ASC.Resources.StudioCountriesResource.ElSalvador, key: "SV", country_code: "+503" },
        { title: ASC.Resources.StudioCountriesResource.EquatorialGuinea, key: "GQ", country_code: "+240" },
        { title: ASC.Resources.StudioCountriesResource.Eritrea, key: "ER", country_code: "+291" },
        { title: ASC.Resources.StudioCountriesResource.Estonia, key: "EE", country_code: "+372", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Ethiopia, key: "ET", country_code: "+251" },
        { title: ASC.Resources.StudioCountriesResource.FaroeIslands, key: "FO", country_code: "+298" },
        { title: ASC.Resources.StudioCountriesResource.Fiji, key: "FJ", country_code: "+679" },
        { title: ASC.Resources.StudioCountriesResource.Finland, key: "FI", country_code: "+358", vat: true },
        { title: ASC.Resources.StudioCountriesResource.France, key: "FR", country_code: "+33", vat: true },
        { title: ASC.Resources.StudioCountriesResource.FrenchGuiana, key: "GF", country_code: "+594" },
        { title: ASC.Resources.StudioCountriesResource.FrenchPolynesia, key: "PF", country_code: "+689" },
        { title: ASC.Resources.StudioCountriesResource.Gabon, key: "GA", country_code: "+241" },
        { title: ASC.Resources.StudioCountriesResource.Gambia, key: "GM", country_code: "+220" },
        { title: ASC.Resources.StudioCountriesResource.Georgia, key: "GE", country_code: "+995" },
        { title: ASC.Resources.StudioCountriesResource.Germany, key: "DE", country_code: "+49", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Ghana, key: "GH", country_code: "+233" },
        { title: ASC.Resources.StudioCountriesResource.Gibraltar, key: "GI", country_code: "+350" },
        { title: ASC.Resources.StudioCountriesResource.Greece, key: "GR", country_code: "+30", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Greenland, key: "GL", country_code: "+299" },
        { title: ASC.Resources.StudioCountriesResource.Grenada, key: "GD", country_code: "+1473" },
        { title: ASC.Resources.StudioCountriesResource.Guadeloupe, key: "GP", country_code: "+590" },
        { title: ASC.Resources.StudioCountriesResource.Guam, key: "GU", country_code: "+1671" },
        { title: ASC.Resources.StudioCountriesResource.Guatemala, key: "GT", country_code: "+502" },
        { title: ASC.Resources.StudioCountriesResource.Guinea, key: "GN", country_code: "+224" },
        { title: ASC.Resources.StudioCountriesResource.GuineaBissau, key: "GW", country_code: "+245" },
        { title: ASC.Resources.StudioCountriesResource.Guyana, key: "GY", country_code: "+592" },
        { title: ASC.Resources.StudioCountriesResource.Haiti, key: "HT", country_code: "+509" },
        { title: ASC.Resources.StudioCountriesResource.Honduras, key: "HN", country_code: "+504" },
        { title: ASC.Resources.StudioCountriesResource.HongKong, key: "HK", country_code: "+852" },
        { title: ASC.Resources.StudioCountriesResource.Hungary, key: "HU", country_code: "+36", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Iceland, key: "IS", country_code: "+354" },
        { title: ASC.Resources.StudioCountriesResource.India, key: "IN", country_code: "+91" },
        { title: ASC.Resources.StudioCountriesResource.Indonesia, key: "ID", country_code: "+62" },
        { title: ASC.Resources.StudioCountriesResource.Iran, key: "IR", country_code: "+98" },
        { title: ASC.Resources.StudioCountriesResource.Iraq, key: "IQ", country_code: "+964" },
        { title: ASC.Resources.StudioCountriesResource.Ireland, key: "IE", country_code: "+353", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Israel, key: "IL", country_code: "+972" },
        { title: ASC.Resources.StudioCountriesResource.Italy, key: "IT", country_code: "+39", vat: true },
        { title: ASC.Resources.StudioCountriesResource.IvoryCoast, key: "CI", country_code: "+225" },
        { title: ASC.Resources.StudioCountriesResource.Jamaica, key: "JM", country_code: "+1876" },
        { title: ASC.Resources.StudioCountriesResource.Japan, key: "JP", country_code: "+81" },
        { title: ASC.Resources.StudioCountriesResource.Jordan, key: "JO", country_code: "+962" },
        { title: ASC.Resources.StudioCountriesResource.Kazakhstan, key: "KZ", country_code: "+7" },
        { title: ASC.Resources.StudioCountriesResource.Kenya, key: "KE", country_code: "+254" },
        { title: ASC.Resources.StudioCountriesResource.Kiribati, key: "KI", country_code: "+686" },
        { title: ASC.Resources.StudioCountriesResource.Kuwait, key: "KW", country_code: "+965" },
        { title: ASC.Resources.StudioCountriesResource.Kyrgyzstan, key: "KG", country_code: "+996" },
        { title: ASC.Resources.StudioCountriesResource.Laos, key: "LA", country_code: "+856" },
        { title: ASC.Resources.StudioCountriesResource.Latvia, key: "LV", country_code: "+371", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Lebanon, key: "LB", country_code: "+961" },
        { title: ASC.Resources.StudioCountriesResource.Lesotho, key: "LS", country_code: "+266" },
        { title: ASC.Resources.StudioCountriesResource.Liberia, key: "LR", country_code: "+231" },
        { title: ASC.Resources.StudioCountriesResource.Libya, key: "LY", country_code: "+218" },
        { title: ASC.Resources.StudioCountriesResource.Liechtenstein, key: "LI", country_code: "+423" },
        { title: ASC.Resources.StudioCountriesResource.Lithuania, key: "LT", country_code: "+370", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Luxembourg, key: "LU", country_code: "+352", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Macau, key: "MO", country_code: "+853" },
        { title: ASC.Resources.StudioCountriesResource.Macedonia, key: "MK", country_code: "+389" },
        { title: ASC.Resources.StudioCountriesResource.Madagascar, key: "MG", country_code: "+261" },
        { title: ASC.Resources.StudioCountriesResource.Malawi, key: "MW", country_code: "+265" },
        { title: ASC.Resources.StudioCountriesResource.Malaysia, key: "MY", country_code: "+60" },
        { title: ASC.Resources.StudioCountriesResource.Maldives, key: "MV", country_code: "+960" },
        { title: ASC.Resources.StudioCountriesResource.Mali, key: "ML", country_code: "+223" },
        { title: ASC.Resources.StudioCountriesResource.Malta, key: "MT", country_code: "+356", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Malvinas, key: "FK", country_code: "+500" },
        { title: ASC.Resources.StudioCountriesResource.MarshallIslands, key: "MH", country_code: "+692" },
        { title: ASC.Resources.StudioCountriesResource.Martinique, key: "MQ", country_code: "+596" },
        { title: ASC.Resources.StudioCountriesResource.Mauritania, key: "MR", country_code: "+222" },
        { title: ASC.Resources.StudioCountriesResource.Mauritius, key: "MU", country_code: "+230" },
        { title: ASC.Resources.StudioCountriesResource.Mexico, key: "MX", country_code: "+52" },
        { title: ASC.Resources.StudioCountriesResource.Micronesia, key: "FM", country_code: "+691" },
        { title: ASC.Resources.StudioCountriesResource.Moldova, key: "MD", country_code: "+373" },
        { title: ASC.Resources.StudioCountriesResource.Monaco, key: "MC", country_code: "+377" },
        { title: ASC.Resources.StudioCountriesResource.Mongolia, key: "MN", country_code: "+976" },
        { title: ASC.Resources.StudioCountriesResource.Montenegro, key: "ME", country_code: "+382" },
        { title: ASC.Resources.StudioCountriesResource.Montserrat, key: "MS", country_code: "+1664" },
        { title: ASC.Resources.StudioCountriesResource.Morocco, key: "MA", country_code: "+212" },
        { title: ASC.Resources.StudioCountriesResource.Mozambique, key: "MZ", country_code: "+258" },
        { title: ASC.Resources.StudioCountriesResource.Myanmar, key: "MM", country_code: "+95" },
        { title: ASC.Resources.StudioCountriesResource.Namibia, key: "NA", country_code: "+264" },
        { title: ASC.Resources.StudioCountriesResource.Nauru, key: "NR", country_code: "+674" },
        { title: ASC.Resources.StudioCountriesResource.Nepal, key: "NP", country_code: "+977" },
        { title: ASC.Resources.StudioCountriesResource.Netherlands, key: "NL", country_code: "+31", vat: true },
        { title: ASC.Resources.StudioCountriesResource.NewCaledonia, key: "NC", country_code: "+687" },
        { title: ASC.Resources.StudioCountriesResource.NewZealand, key: "NZ", country_code: "+64" },
        { title: ASC.Resources.StudioCountriesResource.Nicaragua, key: "NI", country_code: "+505" },
        { title: ASC.Resources.StudioCountriesResource.Niger, key: "NE", country_code: "+227" },
        { title: ASC.Resources.StudioCountriesResource.Nigeria, key: "NG", country_code: "+234" },
        { title: ASC.Resources.StudioCountriesResource.Niue, key: "NU", country_code: "+683" },
        { title: ASC.Resources.StudioCountriesResource.NorfolkIsland, key: "NF", country_code: "+6723" },
        { title: ASC.Resources.StudioCountriesResource.NorthernMarianaIslands, key: "KP", country_code: "+1" },
        { title: ASC.Resources.StudioCountriesResource.NorthKorea, key: "MP", country_code: "+850" },
        { title: ASC.Resources.StudioCountriesResource.Norway, key: "NO", country_code: "+47" },
        { title: ASC.Resources.StudioCountriesResource.Oman, key: "OM", country_code: "+968" },
        { title: ASC.Resources.StudioCountriesResource.Pakistan, key: "PK", country_code: "+92" },
        { title: ASC.Resources.StudioCountriesResource.Palau, key: "PW", country_code: "+680" },
        { title: ASC.Resources.StudioCountriesResource.Palestine, key: "PS", country_code: "+970" },
        { title: ASC.Resources.StudioCountriesResource.Panama, key: "PA", country_code: "+507" },
        { title: ASC.Resources.StudioCountriesResource.PapuaNewGuinea, key: "PG", country_code: "+675" },
        { title: ASC.Resources.StudioCountriesResource.Paraguay, key: "PY", country_code: "+595" },
        { title: ASC.Resources.StudioCountriesResource.Peru, key: "PE", country_code: "+51" },
        { title: ASC.Resources.StudioCountriesResource.Philippines, key: "PH", country_code: "+63" },
        { title: ASC.Resources.StudioCountriesResource.Poland, key: "PL", country_code: "+48", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Portugal, key: "PT", country_code: "+351", vat: true },
        { title: ASC.Resources.StudioCountriesResource.PuertoRico, key: "PR", country_code: "+1787" },
        { title: ASC.Resources.StudioCountriesResource.Qatar, key: "QA", country_code: "+974" },
        { title: ASC.Resources.StudioCountriesResource.RepublicOfKorea, key: "KR", country_code: "+82" },
        { title: ASC.Resources.StudioCountriesResource.Reunion, key: "RE", country_code: "+262" },
        { title: ASC.Resources.StudioCountriesResource.Romania, key: "RO", country_code: "+40", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Russia, key: "RU", country_code: "+7" },
        { title: ASC.Resources.StudioCountriesResource.Rwanda, key: "RW", country_code: "+250" },
        { title: ASC.Resources.StudioCountriesResource.SaintBarthelemy, key: "BL", country_code: "+590" },
        { title: ASC.Resources.StudioCountriesResource.SaintHelena, key: "SH", country_code: "+290" },
        { title: ASC.Resources.StudioCountriesResource.SaintKittsAndNevis, key: "KN", country_code: "+1869" },
        { title: ASC.Resources.StudioCountriesResource.SaintLucia, key: "LC", country_code: "+1758" },
        { title: ASC.Resources.StudioCountriesResource.SaintMartinIsland, key: "MF", country_code: "+590" },
        { title: ASC.Resources.StudioCountriesResource.SaintPierreAndMiquelon, key: "PM", country_code: "+508" },
        { title: ASC.Resources.StudioCountriesResource.SaintVincentAndTheGrenadines, key: "VC", country_code: "+1784" },
        { title: ASC.Resources.StudioCountriesResource.Samoa, key: "WS", country_code: "+685" },
        { title: ASC.Resources.StudioCountriesResource.SanMarino, key: "SM", country_code: "+378" },
        { title: ASC.Resources.StudioCountriesResource.SaoTomeAndPrincipe, key: "ST", country_code: "+239" },
        { title: ASC.Resources.StudioCountriesResource.SaudiArabia, key: "SA", country_code: "+966" },
        { title: ASC.Resources.StudioCountriesResource.Senegal, key: "SN", country_code: "+221" },
        { title: ASC.Resources.StudioCountriesResource.Serbia, key: "RS", country_code: "+381" },
        { title: ASC.Resources.StudioCountriesResource.Seychelles, key: "SC", country_code: "+248" },
        { title: ASC.Resources.StudioCountriesResource.SierraLeone, key: "SL", country_code: "+232" },
        { title: ASC.Resources.StudioCountriesResource.Singapore, key: "SG", country_code: "+65" },
        { title: ASC.Resources.StudioCountriesResource.SintMaarten, key: "SX", country_code: "+1721" },
        { title: ASC.Resources.StudioCountriesResource.Slovakia, key: "SK", country_code: "+421", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Slovenia, key: "SI", country_code: "+386", vat: true },
        { title: ASC.Resources.StudioCountriesResource.SolomonIslands, key: "SB", country_code: "+677" },
        { title: ASC.Resources.StudioCountriesResource.Somalia, key: "SO", country_code: "+252" },
        { title: ASC.Resources.StudioCountriesResource.SouthAfrica, key: "ZA", country_code: "+27" },
        { title: ASC.Resources.StudioCountriesResource.SouthSudan, key: "SS", country_code: "+211" },
        { title: ASC.Resources.StudioCountriesResource.Spain, key: "ES", country_code: "+34", vat: true },
        { title: ASC.Resources.StudioCountriesResource.SriLanka, key: "LK", country_code: "+94" },
        { title: ASC.Resources.StudioCountriesResource.Sudan, key: "SD", country_code: "+249" },
        { title: ASC.Resources.StudioCountriesResource.Suriname, key: "SR", country_code: "+597" },
        { title: ASC.Resources.StudioCountriesResource.Swaziland, key: "SZ", country_code: "+268" },
        { title: ASC.Resources.StudioCountriesResource.Sweden, key: "SE", country_code: "+46", vat: true },
        { title: ASC.Resources.StudioCountriesResource.Switzerland, key: "CH", country_code: "+41" },
        { title: ASC.Resources.StudioCountriesResource.Syria, key: "SY", country_code: "+963" },
        { title: ASC.Resources.StudioCountriesResource.Taiwan, key: "TW", country_code: "+886" },
        { title: ASC.Resources.StudioCountriesResource.Tajikistan, key: "TJ", country_code: "+992" },
        { title: ASC.Resources.StudioCountriesResource.Tanzania, key: "TZ", country_code: "+255" },
        { title: ASC.Resources.StudioCountriesResource.Thailand, key: "TH", country_code: "+66" },
        { title: ASC.Resources.StudioCountriesResource.TheDemocraticRepublicOfTheCongo, key: "CD", country_code: "+243" },
        { title: ASC.Resources.StudioCountriesResource.TimorLeste, key: "TL", country_code: "+670" },
        { title: ASC.Resources.StudioCountriesResource.Togo, key: "TG", country_code: "+228" },
        { title: ASC.Resources.StudioCountriesResource.Tokelau, key: "TK", country_code: "+690" },
        { title: ASC.Resources.StudioCountriesResource.Tonga, key: "TO", country_code: "+676" },
        { title: ASC.Resources.StudioCountriesResource.TrinidadAndTobago, key: "TT", country_code: "+1868" },
        { title: ASC.Resources.StudioCountriesResource.Tunisia, key: "TN", country_code: "+216" },
        { title: ASC.Resources.StudioCountriesResource.Turkey, key: "TR", country_code: "+90" },
        { title: ASC.Resources.StudioCountriesResource.Turkmenistan, key: "TM", country_code: "+993" },
        { title: ASC.Resources.StudioCountriesResource.TurksAndCaicosIslands, key: "TC", country_code: "+1649" },
        { title: ASC.Resources.StudioCountriesResource.Tuvalu, key: "TV", country_code: "+688" },
        { title: ASC.Resources.StudioCountriesResource.UK, key: "GB", country_code: "+44", vat: true },
        { title: ASC.Resources.StudioCountriesResource.USVirginIslands, key: "VI", country_code: "+1340" },
        { title: ASC.Resources.StudioCountriesResource.Uganda, key: "UG", country_code: "+256" },
        { title: ASC.Resources.StudioCountriesResource.Ukraine, key: "UA", country_code: "+380" },
        { title: ASC.Resources.StudioCountriesResource.UnitedArabEmirates, key: "AE", country_code: "+971" },
        { title: ASC.Resources.StudioCountriesResource.UnitedStates, key: "US", country_code: "+1" },
        { title: ASC.Resources.StudioCountriesResource.Uruguay, key: "UY", country_code: "+598" },
        { title: ASC.Resources.StudioCountriesResource.Uzbekistan, key: "UZ", country_code: "+998" },
        { title: ASC.Resources.StudioCountriesResource.Vanuatu, key: "VU", country_code: "+678" },
        { title: ASC.Resources.StudioCountriesResource.VaticanCity, key: "VA", country_code: "+379" },
        { title: ASC.Resources.StudioCountriesResource.Venezuela, key: "VE", country_code: "+58" },
        { title: ASC.Resources.StudioCountriesResource.Vietnam, key: "VN", country_code: "+84" },
        { title: ASC.Resources.StudioCountriesResource.WallisAndFutuna, key: "WF", country_code: "+681" },
        { title: ASC.Resources.StudioCountriesResource.Yemen, key: "YE", country_code: "+967" },
        { title: ASC.Resources.StudioCountriesResource.Zambia, key: "ZM", country_code: "+260" },
        { title: ASC.Resources.StudioCountriesResource.Zimbabwe, key: "ZW", country_code: "+263" }
    ];

    var vm = {
        countriesList: countriesList
    };

    return vm;
}