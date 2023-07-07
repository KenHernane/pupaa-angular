import { Component, inject } from '@angular/core';
import { Firestore, doc, getDoc, getFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { Provinces } from 'src/app/shared/address';
import { setDoc, updateDoc } from 'firebase/firestore';
import { SendEmailVerification } from 'src/app/shared/sendEmail';
import { sendVerification } from 'src/app/shared/sendCode';
@Component({
  selector: 'app-booking-student',
  templateUrl: './booking-student.component.html',
  styleUrls: ['./booking-student.component.css']
})

export class BookingStudentComponent {
  constructor(private formBuilder: FormBuilder, private fb: FirebaseService)  {}
  provinces: any = Provinces;
  cities: any;
  interval: any;
  countdown: number = 250;
  document: any;
  date: any;
  selectPurpose: any;
  transactions: any;
  visible: boolean = false;
  offices: any;
  eight: any;
  nine: any;
  ten: any;
  one: any;
  two: any;
  dateName: any;
  three: any;
  four: any;
  eight2: any;
  nine2: any;
  ten2: any;
  one2: any;
  two2: any;
  three2: any;
  four2: any;
  db: Firestore = inject(Firestore);
  time: any;
  bday!: string;
  meet: any;
  code: any;
  codeMatch: boolean = false;
  transactionCode: any;
  gatePass: any;
  disable: boolean = true;
  abra = [
    {city: "Bangued"},
      {city: "Boliney"},
      {city: "Bucay"},
      {city: "Bucloc"},
      {city: "Daguioman"},
      {city: "Danglas"},
      {city: "Dolores"},
      {city: "La Paz"},
      {city: "Lacub"},
      {city: "Lagangilang"},
      {city: "Lagayan"},
      {city: "Langiden"},
      {city: "Licuan-Baay"},
      {city: "Luba"},
      {city: "Malibcong"},
      {city: "Manabo"},
      {city: "Peñarrubia"},
      {city: "Pidigan"},
      {city: "Pilar"},
      {city: "Sallapadan"},
      {city: "San Isidro"},
      {city: "San Juan"},
      {city: "San Quintin"},
      {city: "Tayum"},
      {city: "Tineg"},
      {city: "Tubo"},
      {city: "Villaviciosa"},
  ];
  agusanDelNorte = [
    {city: "Buenavista"},
      {city: "Butuan City"},
      {city: "Cabadbaran"},
      {city: "Carmen"},
      {city: "Jabonga"},
      {city: "Kitcharao"},
      {city: "Las Nieves"},
      {city: "Magallanes"},
      {city: "Nasipit"},
      {city: "Remedios T. Romualdez"},
      {city: "Santiago"},
      {city: "Tubay"},
  ];
  agusanDelSur = [
    {city: "Bayugan"},
      {city: "Bunawan"},
      {city: "Esperanza"},
      {city: "La Paz"},
      {city: "Loreto"},
      {city: "Prosperidad"},
      {city: "Rosario"},
      {city: "San Francisco"},
      {city: "San Luis"},
      {city: "Santa Josefa"},
      {city: "Sibagat"},
      {city: "Talacogon"},
      {city: "Trento"},
      {city: "Veruela"},
  ];
  aklan = [
    {"city": "Altavas"},
      {"city": "Balete"},
      {"city": "Banga"},
      {"city": "Batan"},
      {"city": "Buruanga"},
      {"city": "Ibajay"},
      {"city": "Kalibo"},
      {"city": "Lezo"},
      {"city": "Libacao"},
      {"city": "Madalag"},
      {"city": "Makato"},
      {"city": "Malay"},
      {"city": "Malinao"},
      {"city": "Nabas"},
      {"city": "New Washington"},
      {"city": "Numancia"},
      {"city": "Tangalan"}
  ];
  albay = [
    {"city": "Bacacay"},
      {"city": "Camalig"},
      {"city": "Daraga(Locsin)"},
      {"city": "Guinobatan"},
      {"city": "Jovellar"},
      {"city": "Legazpi City"},
      {"city": "Libon"},
      {"city": "Ligao"},
      {"city": "Malilipot"},
      {"city": "Malinao"},
      {"city": "Manito"},
      {"city": "Oas"},
      {"city": "Pio Duran"},
      {"city": "Polangui"},
      {"city": "Rapu-Rapu"},
      {"city": "Santo Domingo(Libog)"},
      {"city": "Tabaco"},
      {"city": "Tiwi"}
  ]

  antique = [
     {"city": "Anini-y"},
      {"city": "Barbaza"},
      {"city": "Belison"},
      {"city": "Bugasong"},
      {"city": "Caluya"},
      {"city": "Culasi"},
      {"city": "Hamtic"},
      {"city": "Laua-an"},
      {"city": "Libertad"},
      {"city": "Pandan"},
      {"city": "Patnongon"},
      {"city": "San Jose"},
      {"city": "San Remigio"},
      {"city": "Sebaste"},
      {"city": "Sibalom"},
      {"city": "Tibiao"},
      {"city": "Tobias Fornier (Dao)"},
      {"city": "Valderrama"}
  ];
  apayao = [
    {"city": "Calanasan (Bayag)"},
      {"city": "Conner"},
      {"city": "Flora"},
      {"city": "Kabugao"},
      {"city": "Luna"},
      {"city": "Pudtol"},
      {"city": "Santa Marcela"}
  ];
  aurora = [
     {"city": "Baler"},
      {"city": "Casiguran"},
      {"city": "Dilasag"},
      {"city": "Dinalungan"},
      {"city": "Dingalan"},
      {"city": "Dipaculao"},
      {"city": "Maria Aurora"},
      {"city": "San Luis"}
  ];
  basilan = [
    {"city": "Akbar"},
      {"city": "Al-Barka"},
      {"city": "Hadji Mohammad Ajul"},
      {"city": "Hadji Muhtamad"},
      {"city": "Isabela"},
      {"city": "Lamitan"},
      {"city": "Lantawan"},
      {"city": "Maluso"},
      {"city": "Sumisip"},
      {"city": "Tabuan-Lasa"},
      {"city": "Tipo-Tipo"},
      {"city": "Tuburan"},
      {"city": "Ungkaya Pukan"}
  ];
  bataan = [
    {"city": "Abucay"},
      {"city": "Bagac"},
      {"city": "Balanga"},
      {"city": "Dinalupihan"},
      {"city": "Hermosa"},
      {"city": "Limay"},
      {"city": "Mariveles"},
      {"city": "Morong"},
      {"city": "Orani"},
      {"city": "Orion"},
      {"city": "Pilar"},
      {"city": "Samal"}
  ];
  batanes = [
    {"city": "Basco"},
      {"city": "Itbayat"},
      {"city": "Ivana"},
      {"city": "Mahatao"},
      {"city": "Sabtang"},
      {"city": "Uyugan"}
  ];
  batangas = [
    {"city": "Agoncillo"},
      {"city": "Alitagtag"},
      {"city": "Balayan"},
      {"city": "Balete"},
      {"city": "Batangas City"},
      {"city": "Bauan"},
      {"city": "Calaca"},
      {"city": "Calatagan"},
      {"city": "Cuenca"},
      {"city": "Ibaan"},
      {"city": "Laurel"},
      {"city": "Lemery"},
      {"city": "Lian"},
      {"city": "Lipa City"},
      {"city": "Lobo"},
      {"city": "Mabini"},
      {"city": "Malvar"},
      {"city": "Mataas Na Kahoy"},
      {"city": "Nasugbu"},
      {"city": "Padre Garcia"},
      {"city": "Rosario"},
      {"city": "San Jose"},
      {"city": "San Juan"},
      {"city": "San Luis"},
      {"city": "San Nicolas"},
      {"city": "San Pascual"},
      {"city": "Santa Teresita"},
      {"city": "Santo Tomas"},
      {"city": "Taal"},
      {"city": "Talisay"},
      {"city": "Tanauan"},
      {"city": "Taysan"},
      {"city": "Tingloy"},
      {"city": "Tuy"}
  ];
  benguet = [
    {"city": "Atok"},
      {"city": "Baguio City"},
      {"city": "Bakun"},
      {"city": "Bokod"},
      {"city": "Buguias"},
      {"city": "Itogon"},
      {"city": "Kabayan"},
      {"city": "Kapangan"},
      {"city": "Kibungan"},
      {"city": "La Trinidad"},
      {"city": "Mankayan"},
      {"city": "Sablan"},
      {"city": "Tuba"},
      {"city": "Tublay"}
  ];
  biliran = [
     {"city": "Almeria"},
      {"city": "Biliran"},
      {"city": "Cabucgayan"},
      {"city": "Caibiran"},
      {"city": "Culaba"},
      {"city": "Kawayan"},
      {"city": "Maripipi"},
      {"city": "Naval"}
  ];
  bohol = [
    {"city": "Alburquerque"},
      {"city": "Alicia"},
      {"city": "Anda"},
      {"city": "Antequera"},
      {"city": "Baclayon"},
      {"city": "Balilihan"},
      {"city": "Batuan"},
      {"city": "Bien Unido"},
      {"city": "Bilar"},
      {"city": "Buenavista"},
      {"city": "Calape"},
      {"city": "Candijay"},
      {"city": "Carmen"},
      {"city": "Catigbian"},
      {"city": "Clarin"},
      {"city": "Corella"},
      {"city": "Cortes"},
      {"city": "Dagohoy"},
      {"city": "Danao"},
      {"city": "Dauis"},
      {"city": "Dimiao"},
      {"city": "Duero"},
      {"city": "Garcia Hernandez"},
      {"city": "Guindulman"},
      {"city": "Inabanga"},
      {"city": "Jagna"},
      {"city": "Jetafe"},
      {"city": "Lila"},
      {"city": "Loay"},
      {"city": "Loboc"},
      {"city": "Loon"},
      {"city": "Mabini"},
      {"city": "Maribojoc"},
      {"city": "Panglao"},
      {"city": "Pilar"},
      {"city": "Pres. Carlos P. Garcia (Pitogo)"},
      {"city": "Sagbayan(Borja)"},
      {"city": "San Isidro"},
      {"city": "San Miguel"},
      {"city": "Sevilla"},
      {"city": "Sierra Bullones"},
      {"city": "Sikatuna"},
      {"city": "Tagbilaran City"},
      {"city": "Talibon"},
      {"city": "Trinidad"},
      {"city": "Tubigon"},
      {"city": "Ubay"},
      {"city": "Valencia"}
  ];
  bukidnon = [
    {"city": "Baungon"},
      {"city": "Cabanglasan"},
      {"city": "Damulog"},
      {"city": "Dangcagan"},
      {"city": "Don Carlos"},
      {"city": "Impasug-ong"},
      {"city": "Kadingilan"},
      {"city": "Kalilangan"},
      {"city": "Kibawe"},
      {"city": "Kitaotao"},
      {"city": "Lantapan"},
      {"city": "Libona"},
      {"city": "Malaybalay"},
      {"city": "Malitbog"},
      {"city": "Manolo Fortich"},
      {"city": "Maramag"},
      {"city": "Pangantucan"},
      {"city": "Quezon"},
      {"city": "San Fernando"},
      {"city": "Sumilao"},
      {"city": "Talakag"},
      {"city": "Valencia"}
  ];
  bulacan = [
    {"city": "Angat"},
      {"city": "Balagtas(Bigaa)"},
      {"city": "Baliuag"},
      {"city": "Bocaue"},
      {"city": "Bulacan"},
      {"city": "Bustos"},
      {"city": "Calumpit"},
      {"city": "Doña Remedios Trinidad"},
      {"city": "Guiguinto"},
      {"city": "Hagonoy"},
      {"city": "Malolos"},
      {"city": "Marilao"},
      {"city": "Meycauayan"},
      {"city": "Norzagaray"},
      {"city": "Obando"},
      {"city": "Pandi"},
      {"city": "Paombong"},
      {"city": "Plaridel"},
      {"city": "Pulilan"},
      {"city": "San Ildefonso"},
      {"city": "San Jose del Monte"},
      {"city": "San Miguel"},
      {"city": "San Rafael"},
      {"city": "Santa Maria"}
  ];
  cagayan = [
    {"city": "Abulug"},
      {"city": "Alcala"},
      {"city": "Allacapan"},
      {"city": "Amulung"},
      {"city": "Aparri"},
      {"city": "Baggao"},
      {"city": "Ballesteros"},
      {"city": "Buguey"},
      {"city": "Calayan"},
      {"city": "Camalaniugan"},
      {"city": "Claveria"},
      {"city": "Enrile"},
      {"city": "Gattaran"},
      {"city": "Gonzaga"},
      {"city": "Iguig"},
      {"city": "Lal-lo"},
      {"city": "Lasam"},
      {"city": "Pamplona"},
      {"city": "Peñablanca"},
      {"city": "Piat"},
      {"city": "Rizal"},
      {"city": "Sanchez-Mira"},
      {"city": "Santa Ana"},
      {"city": "Santa Praxedes"},
      {"city": "Santa Teresita"},
      {"city": "Santo Niño (Faire)"},
      {"city": "Solana"},
      {"city": "Tuao"},
      {"city": "Tuguegarao City"}
  ];
  camarinesNorte = [
    {"city": "Basud"},
      {"city": "Capalonga"},
      {"city": "Daet"},
      {"city": "Jose Panganiban"},
      {"city": "Labo"},
      {"city": "Mercedes"},
      {"city": "Paracale"},
      {"city": "San Lorenzo Ruiz (Imelda)"},
      {"city": "San Vicente"},
      {"city": "Santa Elena"},
      {"city": "Talisay"},
      {"city": "Vinzons"}
  ];
  camarinesSur = [
    {"city": "Baao"},
      {"city": "Balatan"},
      {"city": "Bato"},
      {"city": "Bombon"},
      {"city": "Buhi"},
      {"city": "Bula"},
      {"city": "Cabusao"},
      {"city": "Calabanga"},
      {"city": "Camaligan"},
      {"city": "Canaman"},
      {"city": "Caramoan"},
      {"city": "Del Gallego"},
      {"city": "Gainza"},
      {"city": "Garchitorena"},
      {"city": "Goa"},
      {"city": "Iriga City"},
      {"city": "Lagonoy"},
      {"city": "Libmanan"},
      {"city": "Lupi"},
      {"city": "Magarao"},
      {"city": "Milaor"},
      {"city": "Minalabac"},
      {"city": "Nabua"},
      {"city": "Naga City"},
      {"city": "Ocampo"},
      {"city": "Pamplona"},
      {"city": "Pasacao"},
      {"city": "Pili"},
      {"city": "Presentacion(Parubcan)"},
      {"city": "Ragay"},
      {"city": "Sagñay"},
      {"city": "San Fernando"},
      {"city": "San Jose"},
      {"city": "Sipocot"},
      {"city": "Siruma"},
      {"city": "Tigaon"},
      {"city": "Tinambac"}
  ];
  camiguin = [
    {"city": "Catarman"},
      {"city": "Guinsiliban"},
      {"city": "Mahinog"},
      {"city": "Mambajao"},
      {"city": "Sagay"}
  ];
  capiz = [
    {"city": "Cuartero"},
      {"city": "Dao"},
      {"city": "Dumalag"},
      {"city": "Dumarao"},
      {"city": "Ivisan"},
      {"city": "Jamindan"},
      {"city": "Ma-ayon"},
      {"city": "Mambusao"},
      {"city": "Panay"},
      {"city": "Panitan"},
      {"city": "Pilar"},
      {"city": "Pontevedra"},
      {"city": "President Roxas"},
      {"city": "Roxas City"},
      {"city": "Sapi-an"},
      {"city": "Sigma"},
      {"city": "Tapaz"}
  ];
  catanduanes = [
    {"city": "Bagamanoc"},
      {"city": "Baras"},
      {"city": "Bato"},
      {"city": "Caramoran"},
      {"city": "Gigmoto"},
      {"city": "Pandan"},
      {"city": "Panganiban(Payo)"},
      {"city": "San Andres(Calolbon)"},
      {"city": "San Miguel"},
      {"city": "Viga"},
      {"city": "Virac"}
  ];
  cavite = [
    {"city": "Alfonso"},
      {"city": "Amadeo"},
      {"city": "Bacoor"},
      {"city": "Carmona"},
      {"city": "Cavite City"},
      {"city": "Dasmariñas"},
      {"city": "Gen. Mariano Alvarez"},
      {"city": "General Emilio Aguinaldo"},
      {"city": "General Trias"},
      {"city": "Imus"},
      {"city": "Indang"},
      {"city": "Kawit"},
      {"city": "Magallanes"},
      {"city": "Maragondon"},
      {"city": "Mendez(Mendez-Nuñez)"},
      {"city": "Naic"},
      {"city": "Noveleta"},
      {"city": "Rosario"},
      {"city": "Silang"},
      {"city": "Tagaytay City"},
      {"city": "Tanza"},
      {"city": "Ternate"},
      {"city": "Trese Martires City"}
  ];
  cebu = [
    {"city": "Alcantara"},
      {"city": "Alcoy"},
      {"city": "Alegria"},
      {"city": "Aloguinsan"},
      {"city": "Argao"},
      {"city": "Asturias"},
      {"city": "Badian"},
      {"city": "Balamban"},
      {"city": "Bantayan"},
      {"city": "Barili"},
      {"city": "Bogo"},
      {"city": "Boljoon"},
      {"city": "Borbon"},
      {"city": "Carcar"},
      {"city": "Carmen"},
      {"city": "Catmon"},
      {"city": "Cebu City"},
      {"city": "Compostela"},
      {"city": "Consolacion"},
      {"city": "Cordoba"},
      {"city": "Daanbantayan"},
      {"city": "Dalaguete"},
      {"city": "Danao City"},
      {"city": "Dumanjug"},
      {"city": "Ginatilan"},
      {"city": "Lapu-Lapu City(Opon)"},
      {"city": "Liloan"},
      {"city": "Madridejos"},
      {"city": "Malabuyoc"},
      {"city": "Mandaue city"},
      {"city": "Medellin"},
      {"city": "Minglanilla"},
      {"city": "Moalboal"},
      {"city": "Naga"},
      {"city": "Oslob"},
      {"city": "Pilar"},
      {"city": "Pinamungahan"},
      {"city": "Poro"},
      {"city": "Ronda"},
      {"city": "Samboan"},
      {"city": "San Fernando"},
      {"city": "San Francisco"},
      {"city": "San Remigio"},
      {"city": "Santa Fe"},
      {"city": "Santander"},
      {"city": "Sibonga"},
      {"city": "Sogod"},
      {"city": "Tabogon"},
      {"city": "Tabuelan"},
      {"city": "Talisay"},
      {"city": "Toledo City"},
      {"city": "Tuburan"},
      {"city": "Tudela"}
  ];
  compostelaValley = [
    {"city": "Compostela"},
      {"city": "Laak(San Vicente)"},
      {"city": "Mabini(Doña Alicia)"},
      {"city": "Maco"},
      {"city": "Maragusan(San Mariano)"},
      {"city": "Mawab"},
      {"city": "Monkayo"},
      {"city": "Montevista"},
      {"city": "Nabunturan"},
      {"city": "New Bataan"},
      {"city": "Pantukan"}
  ];
  cotabato = [
    {"city": "Alamada"},
      {"city": "Aleosan"},
      {"city": "Antipas"},
      {"city": "Arakan"},
      {"city": "Banisilan"},
      {"city": "Carmen"},
      {"city": "Kabacan"},
      {"city": "Kidapawan"},
      {"city": "Libungan"},
      {"city": "Magpet"},
      {"city": "Makilala"},
      {"city": "Matalam"},
      {"city": "Midsayap"},
      {"city": "M`lang"},
      {"city": "Pigkawayan"},
      {"city": "Pikit"},
      {"city": "President Roxas"},
      {"city": "Tulunan"}
  ];
  davaoDelNorte = [
    {"city": "Asuncion(Saug)"},
      {"city": "Braulio E. Dujali"},
      {"city": "Carmen"},
      {"city": "Kapalong"},
      {"city": "New Corella"},
      {"city": "Panabo"},
      {"city": "Samal, Island Garden"},
      {"city": "San Isidro"},
      {"city": "Santo Tomas"},
      {"city": "Tagum"},
      {"city": "Talaingod"}
  ];
  davaoDelSur = [
     {"city": "Bansalan"},
      {"city": "Davao City"},
      {"city": "Digos"},
      {"city": "Don Marcelino"},
      {"city": "Hagonoy"},
      {"city": "Jose Abad Santos(Trinidad)"},
      {"city": "Kiblawan"},
      {"city": "Magsaysay"},
      {"city": "Malalag"},
      {"city": "Malita"},
      {"city": "Matanao"},
      {"city": "Padada"},
      {"city": "Santa Cruz"},
      {"city": "Santa Maria"},
      {"city": "Sarangani"},
      {"city": "Sulop"}
  ];
  davaoOriental = [
     {"city": "Baganga"},
      {"city": "Banaybanay"},
      {"city": "Boston"},
      {"city": "Caraga"},
      {"city": "Cateel"},
      {"city": "Governor Generoso"},
      {"city": "Lupon"},
      {"city": "Manay"},
      {"city": "Mati"},
      {"city": "San Isidro"},
      {"city": "Tarragona"}
  ];
  easternSamar = [
    {"city": "Arteche"},
      {"city": "Balangiga"},
      {"city": "Balangkayan"},
      {"city": "Borongan"},
      {"city": "Can-Avid"},
      {"city": "Dolores"},
      {"city": "General MacArthur"},
      {"city": "Giporlos"},
      {"city": "Guiuan"},
      {"city": "Hernani"},
      {"city": "Jipapad"},
      {"city": "Lawaan"},
      {"city": "Llorente"},
      {"city": "Maslog"},
      {"city": "Maydolong"},
      {"city": "Mercedes"},
      {"city": "Oras"},
      {"city": "Quinapondan"},
      {"city": "Salcedo"},
      {"city": "San Julian"},
      {"city": "San Policarpo"},
      {"city": "Sulat"},
      {"city": "Taft"}
  ];
  guimaras = [
    {"city": "Buenavista"},
      {"city": "Jordan"},
      {"city": "Nueva Valencia"},
      {"city": "San Lorenzo"},
      {"city": "Sibunag"}
  ];
  ifugao = [
    {"city": "Aguinaldo"},
      {"city": "Alfonso Lista(Potia)"},
      {"city": "Asipulo"},
      {"city": "Banaue"},
      {"city": "Hingyon"},
      {"city": "Hungduan"},
      {"city": "Kiangan"},
      {"city": "Lagawe"},
      {"city": "Lamut"},
      {"city": "Mayoyao"},
      {"city": "Tinoc"}
  ];
  ilocosNorte = [
    {"city": "Adams"},
      {"city": "Bacarra"},
      {"city": "Badoc"},
      {"city": "Bangui"},
      {"city": "Banna(Espiritu)"},
      {"city": "Batac"},
      {"city": "Burgos"},
      {"city": "Carasi"},
      {"city": "Currimao"},
      {"city": "Dingras"},
      {"city": "Dumalneg"},
      {"city": "Laoag City"},
      {"city": "Marcos"},
      {"city": "Nueva Era"},
      {"city": "Pagudpud"},
      {"city": "Paoay"},
      {"city": "Pasuquin"},
      {"city": "Piddig"},
      {"city": "Pinili"},
      {"city": "San Nicolas"},
      {"city": "Sarrat"},
      {"city": "Solsona"},
      {"city": "Vintar"}
  ];
  ilocosSur = [
    {"city": "Alilem"},
      {"city": "Banayoyo"},
      {"city": "Bantay"},
      {"city": "Burgos"},
      {"city": "Cabugao"},
      {"city": "Candon"},
      {"city": "Caoayan"},
      {"city": "Cervantes"},
      {"city": "Galimuyod"},
      {"city": "Gregorio del Pilar(Concepcion)"},
      {"city": "Lidlidda"},
      {"city": "Magsingal"},
      {"city": "Nagbukel"},
      {"city": "Narvacan"},
      {"city": "Quirino(Angkaki)"},
      {"city": "Salcedo(Baugen)"},
      {"city": "San Emilio"},
      {"city": "San Esteban"},
      {"city": "San Ildefonso"},
      {"city": "San Juan(Lapog)"},
      {"city": "San Vicente"},
      {"city": "Santa"},
      {"city": "Santa Catalina"},
      {"city": "Santa Cruz"},
      {"city": "Santa Lucia"},
      {"city": "Santa Maria"},
      {"city": "Santiago"},
      {"city": "Santo Domingo"},
      {"city": "Sigay"},
      {"city": "Sinait"},
      {"city": "Sugpon"},
      {"city": "Suyo"},
      {"city": "Tagudin"},
      {"city": "Vigan"}
  ];
  iloilo = [
     {"city": "Ajuy"},
      {"city": "Alimodian"},
      {"city": "Anilao"},
      {"city": "Badiangan"},
      {"city": "Balasan"},
      {"city": "Banate"},
      {"city": "Barotac Nuevo"},
      {"city": "Batad"},
      {"city": "Bingawan"},
      {"city": "Cabatuan"},
      {"city": "Calinog"},
      {"city": "Carles"},
      {"city": "Concepcion"},
      {"city": "Dingle"},
      {"city": "Dueñas"},
      {"city": "Dumangas"},
      {"city": "Estancia"},
      {"city": "Guimbal"},
      {"city": "Igbaras"},
      {"city": "Iloilo City"},
      {"city": "Janiuay"},
      {"city": "Lambunao"},
      {"city": "Leganes"},
      {"city": "Lemery"},
      {"city": "Leon"},
      {"city": "Maasin"},
      {"city": "Miagao"},
      {"city": "Mina"},
      {"city": "New Lucena"},
      {"city": "Oton"},
      {"city": "Passi"},
      {"city": "Pavia"},
      {"city": "Pototan"},
      {"city": "San Dionisio"},
      {"city": "San Enrique"},
      {"city": "San Joaquin"},
      {"city": "San Miguel"},
      {"city": "San Rafael"},
      {"city": "Santa Barbara"},
      {"city": "Sara"},
      {"city": "Tigbauan"},
      {"city": "Tubungan"},
      {"city": "Zarraga"}
  ];
  isabela = [
    {"city": "Alicia"},
      {"city": "Angadanan"},
      {"city": "Aurora"},
      {"city": "Benito Soliven"},
      {"city": "Burgos"},
      {"city": "Cabagan"},
      {"city": "Cabatuan"},
      {"city": "Cauayan"},
      {"city": "Cordon"},
      {"city": "Delfin Albano"},
      {"city": "Dinapigue"},
      {"city": "Divilacan"},
      {"city": "Echague"},
      {"city": "Gamu"},
      {"city": "Ilagan"},
      {"city": "Jones"},
      {"city": "Luna"},
      {"city": "Maconacon"},
      {"city": "Mallig"},
      {"city": "Naguilian"},
      {"city": "Palanan"},
      {"city": "Quezon"},
      {"city": "Quirino"},
      {"city": "Reina Mercedes"},
      {"city": "Roxas"},
      {"city": "San Agustin"},
      {"city": "San Guillermo"},
      {"city": "San Isidro"},
      {"city": "San Manuel"},
      {"city": "San Mariano"},
      {"city": "San Mateo"},
      {"city": "Santa Maria"},
      {"city": "Santiago"},
      {"city": "Santo Tomas"},
      {"city": "Tumauini"}
  ];
  kalinga = [
    {"city": "Balbalan"},
      {"city": "Lubuagan"},
      {"city": "Pasil"},
      {"city": "Pinukpuk"},
      {"city": "Rizal"},
      {"city": "Tabuk"},
      {"city": "Tanudan"},
      {"city": "Tinglayan"}
  ];
  laguna = [
    {"city": "Alaminos"},
      {"city": "Bay"},
      {"city": "Biñan"},
      {"city": "Calamba"},
      {"city": "Calauan"},
      {"city": "Cavinti"},
      {"city": "Famy"},
      {"city": "Kalayaan"},
      {"city": "Liliw"},
      {"city": "Los Baños"},
      {"city": "Luisiana"},
      {"city": "Lumban"},
      {"city": "Mabitac"},
      {"city": "Magdalena"},
      {"city": "Majayjay"},
      {"city": "Nagcarlan"},
      {"city": "Paete"},
      {"city": "Pagsanjan"},
      {"city": "Pakil"},
      {"city": "Pangil"},
      {"city": "Pila"},
      {"city": "Rizal"},
      {"city": "San Pablo"},
      {"city": "San Pedro"},
      {"city": "Santa Cruz"},
      {"city": "Santa Maria"},
      {"city": "Santa Rosa"},
      {"city": "Siniloan"},
      {"city": "Victoria"}
  ];
  lanaoDelNorte = [
    {"city": "Bacolod"},
      {"city": "Baloi"},
      {"city": "Baroy"},
      {"city": "Iligan"},
      {"city": "Kapatagan"},
      {"city": "Kauswagan"},
      {"city": "Kolambugan"},
      {"city": "Lala"},
      {"city": "Linamon"},
      {"city": "Magsaysay"},
      {"city": "Maigo"},
      {"city": "Matungao"},
      {"city": "Munai"},
      {"city": "Nunungan"},
      {"city": "Pantao Ragat"},
      {"city": "Pantar"},
      {"city": "Poona Piagapo"},
      {"city": "Salvador"},
      {"city": "Sapad"},
      {"city": "Sultan Naga Dimaporo"},
      {"city": "Tagoloan"},
      {"city": "Tangcal"},
      {"city": "Tubod"}
  ];
  lanaoDelSur = [
    {"city": "Amai Manabilang (Bumbaran)"},
      {"city": "Bacolod-Kalawi (Bacolod-Grande)"},
      {"city": "Balabagan"},
      {"city": "Balindong (Watu)"},
      {"city": "Bayang"},
      {"city": "Binidayan"},
      {"city": "Buadiposo-Buntong"},
      {"city": "Bubong"},
      {"city": "Butig"},
      {"city": "Calanogas"},
      {"city": "Ditsaan-Ramain"},
      {"city": "Ganassi"},
      {"city": "Kapai"},
      {"city": "Kapatagan"},
      {"city": "Lumba-Bayabao (Maguing)"},
      {"city": "Lumbaca-Unayan"},
      {"city": "Lumbatan"},
      {"city": "Lumbayanague"},
      {"city": "Madalum"},
      {"city": "Madamba"},
      {"city": "Maguing"},
      {"city": "Malabang"},
      {"city": "Marantao"},
      {"city": "Marawi"},
      {"city": "Marogong"},
      {"city": "Masiu"},
      {"city": "Mulondo"},
      {"city": "Pagayawan (Tatarikan)"},
      {"city": "Piagapo"},
      {"city": "Picong (Sultan Gumander)"},
      {"city": "Poona Bayabao (Gata)"},
      {"city": "Pualas"},
      {"city": "Saguiaran"},
      {"city": "Sultan Dumalondong"},
      {"city": "Tagoloan II"},
      {"city": "Tamparan"},
      {"city": "Taraka"},
      {"city": "Tubaran"},
      {"city": "Tugaya"},
      {"city": "Wao"}
  ];
  laUnion = [
    {"city": "Agoo"},
      {"city": "Aringay"},
      {"city": "Bacnotan"},
      {"city": "Bagulin"},
      {"city": "Balaoan"},
      {"city": "Bangar"},
      {"city": "Bauang"},
      {"city": "Burgos"},
      {"city": "Caba"},
      {"city": "Luna"},
      {"city": "Naguilian"},
      {"city": "Pugo"},
      {"city": "Rosario"},
      {"city": "San Fernando"},
      {"city": "San Gabriel"},
      {"city": "San Juan"},
      {"city": "Santo Tomas"},
      {"city": "Santol"},
      {"city": "Sudipen"},
      {"city": "Tubao"}
  ];
  leyte = [
    {"city": "Abuyog"},
      {"city": "Alangalang"},
      {"city": "Albuera"},
      {"city": "Babatngon"},
      {"city": "Barugo"},
      {"city": "Bato"},
      {"city": "Baybay"},
      {"city": "Burauen"},
      {"city": "Calubian"},
      {"city": "Capoocan"},
      {"city": "Candijay"},
      {"city": "Carigara"},
      {"city": "Dagami"},
      {"city": "Dulag"},
      {"city": "Hilongos"},
      {"city": "Hindang"},
      {"city": "Inopacan"},
      {"city": "Inopacan"},
      {"city": "Isabel"},
      {"city": "Jaro"},
      {"city": "Javier (Bugho)"},
      {"city": "Julita"},
      {"city": "Kananga"},
      {"city": "La Paz"},
      {"city": "Leyte"},
      {"city": "MacArthur"},
      {"city": "Mahaplag"},
      {"city": "Matag-ob"},
      {"city": "Matalom"},
      {"city": "Mayorga"},
      {"city": "Merida"},
      {"city": "Ormoc"},
      {"city": "Palo"},
      {"city": "Palompon"},
      {"city": "Pastrana"},
      {"city": "San Isidro"},
      {"city": "San Miguel"},
      {"city": "Santa Fe"},
      {"city": "Tabango"},
      {"city": "Tabontabon"},
      {"city": "Tacloban"},
      {"city": "Tanauan"},
      {"city": "Tolosa"},
      {"city": "Tunga"},
      {"city": "Villaba"}
  ];
  maguindanao = [
    {"city": "Ampatuan"},
      {"city": "Barira"},
      {"city": "Buldon"},
      {"city": "Buluan"},
      {"city": "Cotabato City"},
      {"city": "Datu Abdullah Sangki"},
      {"city": "Datu Anggal Midtimbang"},
      {"city": "Datu Blah T. Sinsuat"},
      {"city": "Datu Hoffer Ampatuan"},
      {"city": "Datu Odin Sinsuat (Dinaig)"},
      {"city": "Datu Paglas"},
      {"city": "Datu Piang"},
      {"city": "Datu Salibo"},
      {"city": "Datu Saudi-Ampatuan"},
      {"city": "Datu Unsay"},
      {"city": "Gen. S.K. Datun"},
      {"city": "Guindulungan"},
      {"city": "Kabuntulan"},
      {"city": "Maganoy"},
      {"city": "Mamasapano"},
      {"city": "Mangudadatu"},
      {"city": "Matanog"},
      {"city": "Northern Kabuntalan"},
      {"city": "Pagagawan"},
      {"city": "Pagalungan"},
      {"city": "Paglat"},
      {"city": "Pandag"},
      {"city": "Parang"},
      {"city": "Rajah Buayan"},
      {"city": "Sharif Aguak"},
      {"city": "Shariff Saydona Mustapha"},
      {"city": "South Upi"},
      {"city": "Sultan Kudarat"},
      {"city": "Sultan Mastura"},
      {"city": "Sultan Sa Barongis"},
      {"city": "Sultan Sumagka (formerly Talitay)"},
      {"city": "Talayan"},
      {"city": "Upi"}
  ];
  marinduque = [
    {"city": "Boac"},
      {"city": "Buenavista"},
      {"city": "Antequera"},
      {"city": "Gasan"},
      {"city": "Mogpog"},
      {"city": "Santa Cruz"},
      {"city": "Torrijos"}
  ];
  masbate = [
    {"city": "Aroroy"},
      {"city": "Baleno"},
      {"city": "Balud"},
      {"city": "Batuan"},
      {"city": "Cataingan"},
      {"city": "Cawayan"},
      {"city": "Claveria"},
      {"city": "Dimasalang"},
      {"city": "Esperanza"},
      {"city": "Mandaon"},
      {"city": "Masbate City"},
      {"city": "Milagros"},
      {"city": "Mobo"},
      {"city": "Monreal"},
      {"city": "Palanas"},
      {"city": "Pio V. Corpuz"},
      {"city": "Placer"},
      {"city": "San Fernando"},
      {"city": "San Jacinto"},
      {"city": "San Pascual"},
      {"city": "Uson"}
  ];
  metroManila = [
    {"city": "Caloocan"},
      {"city": "Las Piñas"},
      {"city": "Makati"},
      {"city": "Malabon"},
      {"city": "Mandaluyong"},
      {"city": "City of Manila"},
      {"city": "Marikina"},
      {"city": "Muntinlupa"},
      {"city": "Navotas"},
      {"city": "Parañaque"},
      {"city": "Pasay"},
      {"city": "Pasig"},
      {"city": "Pateros"},
      {"city": "Quezon city"},
      {"city": "San Juan"},
      {"city": "Taguig"},
      {"city": "Valenzuela"}
  ];
  misamisOccidental = [
    {"city": "Aloran"},
      {"city": "Baliangao"},
      {"city": "Bonifacio"},
      {"city": "Calamba"},
      {"city": "Clarin"},
      {"city": "Concepcion"},
      {"city": "Don Victoriano Chiongbian"},
      {"city": "Jimenez"},
      {"city": "Lopez Jaena"},
      {"city": "Oroquieta"},
      {"city": "Ozamiz"},
      {"city": "Panaon"},
      {"city": "Plaridel"},
      {"city": "Sapang Dalaga"},
      {"city": "Sinacaban"},
      {"city": "Tangub"},
      {"city": "Tudela"}
  ];
  misamisOriental = [
    {"city": "Alubijid"},
      {"city": "Balingasag"},
      {"city": "Balingoan"},
      {"city": "Binuangan"},
      {"city": "Cagayan de Oro"},
      {"city": "Claveria"},
      {"city": "El Salvador"},
      {"city": "Gingoog"},
      {"city": "Gitagum"},
      {"city": "Initao"},
      {"city": "Jasaan"},
      {"city": "Kinoguitan"},
      {"city": "Lagonglong"},
      {"city": "Laguindingan"},
      {"city": "Libertad"},
      {"city": "Lugait"},
      {"city": "Magsaysay"},
      {"city": "Manticao"},
      {"city": "Medina"},
      {"city": "Naawan"},
      {"city": "Opol"},
      {"city": "Salay"},
      {"city": "Sugbongcogon"},
      {"city": "Tagoloan"},
      {"city": "Talisayan"},
      {"city": "Villanueva"}
  ];
  mountainProvince = [
    {"city": "Barlig"},
      {"city": "Bauko"},
      {"city": "Besao"},
      {"city": "Bontoc"},
      {"city": "Natonin"},
      {"city": "Paracelis"},
      {"city": "Sabangan"},
      {"city": "Sadanga"},
      {"city": "Sagada"},
      {"city": "Tadian"}
  ];
  negrosOccidental = [
    {"city": "Bacolod"},
      {"city": "Bago"},
      {"city": "Binalbagan"},
      {"city": "Cadiz"},
      {"city": "Calatrava"},
      {"city": "Candoni"},
      {"city": "Cauayan"},
      {"city": "Enrique B. Magalona (Saravia)"},
      {"city": "Escalante"},
      {"city": "Himamaylan"},
      {"city": "Hinigaran"},
      {"city": "Hinoba-an (Asia)"},
      {"city": "Ilog"},
      {"city": "Isabela"},
      {"city": "Kabankalan"},
      {"city": "La Carlota"},
      {"city": "La Castellana"},
      {"city": "Manapla"},
      {"city": "Moises Padilla (Magallon)"},
      {"city": "Murcia"},
      {"city": "Pontevedra"},
      {"city": "Pulupandan"},
      {"city": "Sagay"},
      {"city": "Salvador Benedicto"},
      {"city": "San Carlos"},
      {"city": "San Enrique"},
      {"city": "Silay"},
      {"city": "Sipalay"},
      {"city": "Talisay"},
      {"city": "Toboso"},
      {"city": "Valladolid"},
      {"city": "Victorias"}
  ];
  negrosOriental = [
    {"city": "Amlan(Ayuquitan)"},
      {"city": "Ayungon"},
      {"city": "Bacong"},
      {"city": "Bais"},
      {"city": "Basay"},
      {"city": "Bayawan(Tulong)"},
      {"city": "Bindoy(Payabon)"},
      {"city": "Canlaon"},
      {"city": "Dauin"},
      {"city": "Santa Catalina"},
      {"city": "Siaton"},
      {"city": "Sibulan"},
      {"city": "Tanjay"},
      {"city": "Tayasan 1st"},
      {"city": "Valencia(Luzurriaga)"},
      {"city": "Vallehermoso"},
      {"city": "Zamboanguita"},
      {"city": "Dumaguete"},
      {"city": "Guihulngan"},
      {"city": "Jimalalud"},
      {"city": "La Libertad"},
      {"city": "Mabinay"},
      {"city": "Manjuyod"},
      {"city": "Pamplona"},
      {"city": "San Jose"}
  ];
  northernSamar = [
    {"city": "Allen"},
      {"city": "Biri"},
      {"city": "Bobon"},
      {"city": "Capul"},
      {"city": "Catarman"},
      {"city": "Catubig"},
      {"city": "Gamay"},
      {"city": "Laoang"},
      {"city": "Lapinig"},
      {"city": "Las Navas"},
      {"city": "Lavezares"},
      {"city": "Lope de Vega"},
      {"city": "Mapanas"},
      {"city": "Mondragon"},
      {"city": "Palapag"},
      {"city": "Pambujan"},
      {"city": "Rosario"},
      {"city": "San Antonio"},
      {"city": "San Isidro"},
      {"city": "San Jose"},
      {"city": "San Roque"},
      {"city": "San Vicente"},
      {"city": "Silvino Lobos"},
      {"city": "Victoria"}
  ];
  nuevaEcija = [
     {"city": "Aliaga"},
      {"city": "Bongabon"},
      {"city": "Cabanatuan"},
      {"city": "Cabiao"},
      {"city": "Carranglan"},
      {"city": "Cuyapo"},
      {"city": "Gabaldon(Bitulok & Sabani)"},
      {"city": "Gapan"},
      {"city": "General Mamerto Natividad"},
      {"city": "General Tinio(Papaya)"},
      {"city": "Guimba"},
      {"city": "Jaen"},
      {"city": "Laur"},
      {"city": "Licab"},
      {"city": "Llanera"},
      {"city": "Lupao"},
      {"city": "Muñoz"},
      {"city": "Nampicuan"},
      {"city": "Palayan"},
      {"city": "Pantabangan"},
      {"city": "Peñaranda"},
      {"city": "Quezon"},
      {"city": "Rizal"},
      {"city": "San Antonio"},
      {"city": "San Isidro"},
      {"city": "San Jose(Cabaritan)"},
      {"city": "San Leonardo"},
      {"city": "Santa Rosa"},
      {"city": "Santo Domingo"},
      {"city": "Talavera"},
      {"city": "Talugtug"},
      {"city": "Zaragoza"}
  ];
  nuevaVizcaya = [
    {"city": "Alfonso Castañeda"},
      {"city": "Ambaguio"},
      {"city": "Aritao"},
      {"city": "Bagabag"},
      {"city": "Bambang"},
      {"city": "Bayombong"},
      {"city": "Diadi"},
      {"city": "Dupax del Norte"},
      {"city": "Dupax del Sur"},
      {"city": "Kasibu"},
      {"city": "Kayapa"},
      {"city": "Quezon"},
      {"city": "Santa Fe(Imugan)"},
      {"city": "Solano"},
      {"city": "Villaverde(Ibung)"}
  ];
  occidentalMindoro = [
    {"city": "Abra de Ilog"},
      {"city": "Calintaan"},
      {"city": "Looc"},
      {"city": "Lubang"},
      {"city": "Magsaysay"},
      {"city": "Mamburao"},
      {"city": "Paluan"},
      {"city": "Rizal"},
      {"city": "Sablayan"},
      {"city": "San Jose"},
      {"city": "Santa Cruz"}
  ];
  orientalMindoro = [
    {"city": "Baco"},
      {"city": "Bansud"},
      {"city": "Bongabong"},
      {"city": "Bulalacao(San Pedro)"},
      {"city": "Calapan"},
      {"city": "Gloria"},
      {"city": "Mansalay"},
      {"city": "Naujan"},
      {"city": "Pinamalayan"},
      {"city": "Pola"},
      {"city": "Puerto Galera"},
      {"city": "Roxas"},
      {"city": "San Teodoro"},
      {"city": "Socorro"},
      {"city": "Victoria"}
  ];
  palawan = [
    {"city": "Aborlan"},
      {"city": "Agutaya"},
      {"city": "Araceli"},
      {"city": "Balabac"},
      {"city": "Bataraza"},
      {"city": "Brooke’s Point"},
      {"city": "Busuanga"},
      {"city": "Cagayancillo"},
      {"city": "Coron"},
      {"city": "Culion"},
      {"city": "Cuyo"},
      {"city": "Dumaran"},
      {"city": "El Nido"},
      {"city": "Kalayaan"},
      {"city": "Linapacan"},
      {"city": "Magsaysay"},
      {"city": "Narra"},
      {"city": "Puerto Princesa"},
      {"city": "Quezon"},
      {"city": "Rizal"},
      {"city": "Roxas"},
      {"city": "San Vicente"},
      {"city": "Sofronio Española"},
      {"city": "Taytay"}
  ];
  pampanga = [
    {"city": "Angeles"},
      {"city": "Apalit"},
      {"city": "Arayat"},
      {"city": "Bacolor"},
      {"city": "Candaba"},
      {"city": "Floridablanca"},
      {"city": "Guagua"},
      {"city": "Lubao"},
      {"city": "Mabalacat"},
      {"city": "Macabebe"},
      {"city": "Magalang"},
      {"city": "Masantol"},
      {"city": "Mexico"},
      {"city": "Minalin"},
      {"city": "Porac"},
      {"city": "San Fernando"},
      {"city": "San Luis"},
      {"city": "San Simon"},
      {"city": "Santa Ana"},
      {"city": "Santa Rita"},
      {"city": "Santo Tomas"},
      {"city": "Sasmuan"}
  ];
  pangasinan = [
    {"city": "Agno"},
      {"city": "Aguilar"},
      {"city": "Alcala"},
      {"city": "Anda"},
      {"city": "Asingan"},
      {"city": "Balungao"},
      {"city": "Bani"},
      {"city": "Basista"},
      {"city": "Bautista"},
      {"city": "Bayambang"},
      {"city": "Binalonan"},
      {"city": "Binmaley"},
      {"city": "Bolinao"},
      {"city": "Bugallon"},
      {"city": "Burgos"},
      {"city": "Calasiao"},
      {"city": "Dasol"},
      {"city": "Infanta"},
      {"city": "Labrador"},
      {"city": "Laoac"},
      {"city": "Lingayen(capital)"},
      {"city": "Mabini"},
      {"city": "Malasiqui"},
      {"city": "Manaoag"},
      {"city": "Mangaldan"},
      {"city": "Mangatarem"},
      {"city": "Mapandan"},
      {"city": "Loay"},
      {"city": "Loboc"},
      {"city": "Loon"},
      {"city": "Mabini"},
      {"city": "Maribojoc"},
      {"city": "San Manuel"},
      {"city": "San Nicolas"},
      {"city": "San Quintin"},
      {"city": "Santa Barbara"},
      {"city": "Santa Maria"},
      {"city": "Santo Tomas"},
      {"city": "Sison"},
      {"city": "Sual"},
      {"city": "Tayug"},
      {"city": "Umingan"},
      {"city": "Urbiztondo"},
      {"city": "Villasis"}
  ];
  quezon = [
    {"city": "Agdangan"},
      {"city": "Alabat"},
      {"city": "Atimonan"},
      {"city": "Buenavista"},
      {"city": "Burdeos"},
      {"city": "Calauag"},
      {"city": "Candelaria"},
      {"city": "Catanauan"},
      {"city": "Dolores"},
      {"city": "General Luna"},
      {"city": "General Nakar"},
      {"city": "Guinayangan"},
      {"city": "Gumaca"},
      {"city": "Infanta"},
      {"city": "Jomalig"},
      {"city": "Lopez"},
      {"city": "Lucban"},
      {"city": "Lucena"},
      {"city": "Macalelon"},
      {"city": "Mauban"},
      {"city": "Mulanay"},
      {"city": "Padre Burgos"},
      {"city": "Pagbilao"},
      {"city": "Panukulan"},
      {"city": "Patnanungan"},
      {"city": "Perez"},
      {"city": "Pitogo"},
      {"city": "Plaridel"},
      {"city": "Polillo"},
      {"city": "Quezon"},
      {"city": "Real"},
      {"city": "Sampaloc"},
      {"city": "San Andres"},
      {"city": "San Antonio"},
      {"city": "San Francisco"},
      {"city": "San Narciso"},
      {"city": "Sariaya"},
      {"city": "Tagkawayan"},
      {"city": "Tayabas"},
      {"city": "Tiaong"},
      {"city": "Unisan"}
  ];
  quirino = [
    {"city": "Aglipay"},
      {"city": "Cabarroguis"},
      {"city": "Diffun"},
      {"city": "Maddela"},
      {"city": "Nagtipunan"},
      {"city": "Saguday"}
  ];
  rizal = [
    {"city": "Angono"},
      {"city": "Antipolo"},
      {"city": "Baras"},
      {"city": "Binangonan"},
      {"city": "Cainta"},
      {"city": "Cardona"},
      {"city": "Jalajala"},
      {"city": "Morong"},
      {"city": "Pililla"},
      {"city": "Rodriguez"},
      {"city": "San Mateo"},
      {"city": "Tanay"},
      {"city": "Taytay"},
      {"city": "Teresa"}
  ];
  romblon = [
     {"city": "Alcantara"},
      {"city": "Banton(Jones)"},
      {"city": "Cajidiocan"},
      {"city": "Calatrava"},
      {"city": "Concepcion"},
      {"city": "Corcuera"},
      {"city": "Ferrol"},
      {"city": "Looc"},
      {"city": "Magdiwang"},
      {"city": "Odiongan"},
      {"city": "Romblon"},
      {"city": "San Agustin"},
      {"city": "San Andres"},
      {"city": "San Fernando"},
      {"city": "San Jose"},
      {"city": "Santa Fe"},
      {"city": "Santa Maria(Imelda)"}
  ];
  samar = [
    {"city": "Almagro"},
      {"city": "Basey"},
      {"city": "Calbayog"},
      {"city": "Calbiga"},
      {"city": "Catbalogan"},
      {"city": "Daram"},
      {"city": "Gandara"},
      {"city": "Hinabangan"},
      {"city": "Jiabong"},
      {"city": "Marabut"},
      {"city": "Matuguinao"},
      {"city": "Motiong"},
      {"city": "Pagsanghan"},
      {"city": "Paranas(Wright)"},
      {"city": "Pinabacdao"},
      {"city": "San Jorge"},
      {"city": "San Jose de Buan"},
      {"city": "San Sebastian"},
      {"city": "Santa Margarita"},
      {"city": "Santa Rita"},
      {"city": "Santo Niño"},
      {"city": "Tagapul-an"},
      {"city": "Talalora"},
      {"city": "Tarangnan"},
      {"city": "Villareal"},
      {"city": "Zumarraga"}
  ];
  sarangani = [
    {"city": "Alabel"},
      {"city": "Glan"},
      {"city": "Kiamba"},
      {"city": "Maasim"},
      {"city": "Maitum"},
      {"city": "Malapatan"},
      {"city": "Malungon"}
  ];
  siquijor = [
    {"city": "Enrique Villanueva"},
      {"city": "Larena"},
      {"city": "Lazi"},
      {"city": "Maria"},
      {"city": "San Juan"},
      {"city": "Siquijor"}
  ];
  sorsogon = [
    {"city": "Barcelona"},
      {"city": "Bulan"},
      {"city": "Bulusan"},
      {"city": "Casiguran"},
      {"city": "Castilla"},
      {"city": "Donsol"},
      {"city": "Gubat"},
      {"city": "Irosin"},
      {"city": "Juban"},
      {"city": "Magallanes"},
      {"city": "Matnog"},
      {"city": "Pilar"},
      {"city": "Prieto Diaz"},
      {"city": "Santa Magdalena"},
      {"city": "Sorsogon City"}
  ];
  southCotabato = [
    {"city": "Banga"},
      {"city": "General Santos"},
      {"city": "Koronadal"},
      {"city": "Lake Sebu"},
      {"city": "Norala"},
      {"city": "Polomolok"},
      {"city": "Santo Niño"},
      {"city": "Surallah"},
      {"city": "T’Boli"},
      {"city": "Tampakan"},
      {"city": "Tantangan"},
      {"city": "Tupi"}
  ];
  southernLeyte = [
     {"city": "Anahawan"},
      {"city": "Bontoc"},
      {"city": "Hinunangan"},
      {"city": "Hinundayan"},
      {"city": "Libagon"},
      {"city": "Liloan"},
      {"city": "Limasawa"},
      {"city": "Maasin"},
      {"city": "Macrohon"},
      {"city": "Malitbog"},
      {"city": "Padre Burgos"},
      {"city": "Pintuyan"},
      {"city": "Saint Bernard"},
      {"city": "San Francisco"},
      {"city": "San Juan (Cabalian)"},
      {"city": "San Ricardo"},
      {"city": "Silago"},
      {"city": "Sogod"},
      {"city": "Tomas Oppus"}
  ];
  sultanKudarat = [
    {"city": "Bagumbayan"},
      {"city": "Columbio"},
      {"city": "Esperanza"},
      {"city": "Isulan"},
      {"city": "Kalamansig"},
      {"city": "Lambayong (Mariano Marcos)"},
      {"city": "Lebak"},
      {"city": "Lutayan"},
      {"city": "Palimbang"},
      {"city": "President Quirino"},
      {"city": "Senator Ninoy Aquino"},
      {"city": "Tacurong"}
  ];
  sulu = [
    {"city": "Banguingui"},
      {"city": "Hadji Panglima Tahil"},
      {"city": "Indanan"},
      {"city": "Jolo"},
      {"city": "Kalingalan Caluang"},
      {"city": "Lugus"},
      {"city": "Luuk"},
      {"city": "Maimbung"},
      {"city": "Old Panamao"},
      {"city": "Omar"},
      {"city": "Pandami"},
      {"city": "Panglima Estino"},
      {"city": "Pangutaran"},
      {"city": "Parang"},
      {"city": "Pata"},
      {"city": "Patikul"},
      {"city": "Siasi"},
      {"city": "Talipao"},
      {"city": "Tapul"}
  ];
  surigaoDelNorte = [
    {"city": "Alegria"},
      {"city": "Bacuag"},
      {"city": "Burgos"},
      {"city": "Claver"},
      {"city": "Dapa"},
      {"city": "Del Carmen"},
      {"city": "General Luna"},
      {"city": "Gigaquit"},
      {"city": "Mainit"},
      {"city": "Malimono"},
      {"city": "Pilar"},
      {"city": "Placer"},
      {"city": "San Benito"},
      {"city": "San Francisco(Anao-Aon)"},
      {"city": "San Isidro"},
      {"city": "Santa Monica(Sapao)"},
      {"city": "Sison"},
      {"city": "Socorro"},
      {"city": "Surigao city"},
      {"city": "Tagana-an"},
      {"city": "Tubod"}
  ];
  surigaoDelSur = [
    {"city": "Barobo"},
      {"city": "Bayabas"},
      {"city": "Bislig"},
      {"city": "Cagwait"},
      {"city": "Cantilan"},
      {"city": "Carmen"},
      {"city": "Carrascal"},
      {"city": "Cortes"},
      {"city": "Hinatuan"},
      {"city": "Lanuza"},
      {"city": "Lianga"},
      {"city": "Lingig"},
      {"city": "Madrid"},
      {"city": "Marihatag"},
      {"city": "San Agustin"},
      {"city": "San Miguel"},
      {"city": "Tagbina"},
      {"city": "Tago"},
      {"city": "Tandag"}
  ];
  tarlac = [
    {"city": "Anao"},
      {"city": "Bamban"},
      {"city": "Camiling"},
      {"city": "Capas"},
      {"city": "Concepcion"},
      {"city": "Gerona"},
      {"city": "La Paz"},
      {"city": "Mayantoc"},
      {"city": "Moncada"},
      {"city": "Paniqui"},
      {"city": "Pura"},
      {"city": "Ramos"},
      {"city": "San Clemente"},
      {"city": "San Jose"},
      {"city": "San Manuel"},
      {"city": "Santa Ignacia"},
      {"city": "Tarlac City"},
      {"city": "Victoria"}
  ];
  tawiTawi = [
    {"city": "Bongao"},
      {"city": "Languyan"},
      {"city": "Mapun"},
      {"city": "Panglima Sugala"},
      {"city": "Sapa-Sapa"},
      {"city": "Sibutu"},
      {"city": "Simunul"},
      {"city": "Sitangkai"},
      {"city": "South Ubian"},
      {"city": "Tandubas"},
      {"city": "Turtle Islands"}
  ];
  zambales = [
    {"city": "Botolan"},
      {"city": "Cabangan"},
      {"city": "Candelaria"},
      {"city": "Castillejos"},
      {"city": "Iba"},
      {"city": "Masinloc"},
      {"city": "Olongapo"},
      {"city": "Palauig"},
      {"city": "San Antonio"},
      {"city": "San Felipe"},
      {"city": "San Marcelino"},
      {"city": "San Narciso"},
      {"city": "Santa Cruz"},
      {"city": "Subic"}
  ];
  zamboangaDelNorte = [
    {"city": "Baliguian"},
      {"city": "Dapitan"},
      {"city": "Dipolog"},
      {"city": "Godod"},
      {"city": "Gutalac"},
      {"city": "Jose Dalman"},
      {"city": "Kalawit"},
      {"city": "Katipunan"},
      {"city": "La Libertad"},
      {"city": "Labason"},
      {"city": "Leon B. Postigo"},
      {"city": "Liloy"},
      {"city": "Manukan"},
      {"city": "Mutia"},
      {"city": "Piñan"},
      {"city": "Polanco"},
      {"city": "President Manuel A. Roxas"},
      {"city": "Rizal"},
      {"city": "Salug"},
      {"city": "Sergio Osmeña Sr."},
      {"city": "Siayan"},
      {"city": "Sibuco"},
      {"city": "Sibutad"},
      {"city": "Sindangan"},
      {"city": "Siocon"},
      {"city": "Sirawai"},
      {"city": "Tampilisan"}
  ];
  zamboangaDelSur = [
    {"city": "Aurora"},
      {"city": "Bayog"},
      {"city": "Dimataling"},
      {"city": "Dinas"},
      {"city": "Dumalinao"},
      {"city": "Dumingag"},
      {"city": "Guipos"},
      {"city": "Josefina"},
      {"city": "Kumalarang"},
      {"city": "Labangan"},
      {"city": "Lakewood"},
      {"city": "Lapuyan"},
      {"city": "Mahayag"},
      {"city": "Margosatubig"},
      {"city": "Midsalip"},
      {"city": "Molave"},
      {"city": "Pagadian"},
      {"city": "Pitogo"},
      {"city": "Ramon Magsaysay(Liargo)"},
      {"city": "San Miguel"},
      {"city": "San Pablo"},
      {"city": "Sominot(Don Mariano Marcos)"},
      {"city": "Tabina"},
      {"city": "Tambulig"},
      {"city": "Tigbao"},
      {"city": "Tukuran"},
      {"city": "Vincenzo A. Sagun"},
      {"city": "Zamboanga city"}
  ];
  zamboangaSibugay = [
    {"city": "Alicia"},
      {"city": "Buug"},
      {"city": "Diplahan"},
      {"city": "Imelda"},
      {"city": "Ipil"},
      {"city": "Kabasalan"},
      {"city": "Mabuhay"},
      {"city": "Malangas"},
      {"city": "Naga"},
      {"city": "Olutanga"},
      {"city": "Payao"},
      {"city": "Roseller Lim"},
      {"city": "Siay"},
      {"city": "Talusan"},
      {"city": "Titay"},
      {"city": "Tungawan"}
  ];
  dinagatIslands = [
    {"city": "Basilisa"},
      {"city": "Cagdianao"},
      {"city": "Dinagat"},
      {"city": "Libjo"},
      {"city": "Loreto"},
      {"city": "San Jose"},
      {"city": "Tubajon"}
  ];

  changeProvince(event: any) {
    if(event === 'Abra') {
      this.cities = this.abra;

    }
    else if(event === 'Agusan Del Norte') {
      this.cities = this.agusanDelNorte;
    }
    else if(event === 'Agusan Del Sur') {
      this.cities = this.agusanDelSur;
    }
    else if(event === 'Aklan') {
      this.cities = this.aklan;
    }
    else if(event === 'Albay') {
      this.cities = this.albay;
    }
    else if(event === 'Antique') {
      this.cities = this.antique;
    }
    else if(event === 'Apayao') {
      this.cities = this.apayao;
    }
    else if(event === 'Aurora') {
      this.cities = this.aurora;
    }
    else if(event === 'Basilan') {
      this.cities = this.basilan;
    }
    else if(event === 'Bataan') {
      this.cities = this.bataan;
    }
    else if(event === 'Batanes') {
      this.cities = this.batanes;
    }
    else if(event === 'Batangas') {
      this.cities = this.batangas;
    }
    else if(event === 'Benguet') {
      this.cities = this.abra;
    }
    else if(event === 'Biliran') {
      this.cities = this.biliran;
    }
    else if(event === 'Bohol') {
      this.cities = this.bohol;
    }
    else if(event === 'Bukidnon') {
      this.cities = this.bukidnon;
    }
    else if(event === 'Bulacan') {
      this.cities = this.bulacan;
    }
    else if(event === 'Cagayan') {
      this.cities = this.cagayan;
    }
    else if(event === 'Camarines Norte') {
      this.cities = this.camarinesNorte;
    }
    else if(event === 'Camarines Sur') {
      this.cities = this.camarinesSur;
    }
    else if(event === 'Camiguin') {
      this.cities = this.camiguin;
    }
    else if(event === 'Capiz') {
      this.cities = this.capiz;
    }
    else if(event === 'Catanduanes') {
      this.cities = this.catanduanes;
    }
    else if(event === 'Cavite') {
      this.cities = this.cavite;
    }
    else if(event === 'Cebu') {
      this.cities = this.cebu;
    }
    else if(event === 'Compostela Valley') {
      this.cities = this.compostelaValley;
    }
    else if(event === 'Cotabato') {
      this.cities = this.cotabato;
    }
    else if(event === 'Davao Del Norte') {
      this.cities = this.davaoDelNorte;
    }
    else if(event === 'Davao Del Sur') {
      this.cities = this.davaoDelSur;
    }
    else if(event === 'Davao Oriental') {
      this.cities = this.davaoOriental;
    }
    else if(event === 'Eastern Samar') {
      this.cities = this.easternSamar;
    }
    else if(event === 'Guimares') {
      this.cities = this.guimaras;
    }
    else if(event === 'else ifugao') {
      this.cities = this.ifugao;
    }
    else if(event === 'Ilocos Norte') {
      this.cities = this.ilocosNorte;
    }
    else if(event === 'Ilocos Sur') {
      this.cities = this.ilocosSur;
    }
    else if(event === 'Iloilo') {
      this.cities = this.iloilo;
    }
    else if(event === 'Isabela') {
      this.cities = this.isabela;
    }
    else if(event === 'Kalinga') {
      this.cities = this.kalinga;
    }
    else if(event === 'Laguna') {
      this.cities = this.laguna;
    }
    else if(event === 'Lanao Del Norte') {
      this.cities = this.lanaoDelNorte;
    }
    else if(event === 'Lanao Del Sur') {
      this.cities = this.lanaoDelSur;
    }
    else if(event === 'La Union') {
      this.cities = this.laUnion;
    }
    else if(event === 'Leyte') {
      this.cities = this.leyte;
    }
    else if(event === 'Maguindanao') {
      this.cities = this.maguindanao;
    }
    else if(event === 'Marinduque') {
      this.cities = this.marinduque;
    }
    else if(event === 'Masbate') {
      this.cities = this.masbate;
    }
    else if(event === 'Metropolitan Manila') {
      this.cities = this.metroManila;
    }
    else if(event === 'Misamis Occidental') {
      this.cities = this.misamisOccidental;
    }
    else if(event === 'Misamis Oriental') {
      this.cities = this.misamisOriental;
    }
    else if(event === 'Mountain Province') {
      this.cities = this.mountainProvince;
    }
    else if(event === 'Negros Occidental') {
      this.cities = this.negrosOccidental;
    }
    else if(event === 'Negros Oriental') {
      this.cities = this.negrosOriental;
    }
    else if(event === 'Northern Samar') {
      this.cities = this.northernSamar;
    }
    else if(event === 'Nueva Ecija') {
      this.cities = this.nuevaEcija;
    }
    else if(event === 'Nueva Viscaya') {
      this.cities = this.nuevaVizcaya;
    }
    else if(event === 'Occidental Mindoro') {
      this.cities = this.occidentalMindoro;
    }
    else if(event === 'Oriental Mindoro') {
      this.cities = this.orientalMindoro;
    }
    else if(event === 'Palawan') {
      this.cities = this.palawan;
    }
    else if(event === 'Pampanga') {
      this.cities = this.pampanga;
    }
    else if(event === 'Pangasinan') {
      this.cities = this.pangasinan;
    }
    else if(event === 'Quezon') {
      this.cities = this.quezon;
    }
    else if(event === 'Quirino') {
      this.cities = this.quirino;
    }
    else if(event === 'Rizal') {
      this.cities = this.rizal;
    }
    else if(event === 'Romblon') {
      this.cities = this.romblon;
    }
    else if(event === 'Samar') {
      this.cities = this.samar;
    }
    else if(event === 'Sarangani') {
      this.cities = this.sarangani;
    }
    else if(event === 'Siquijor') {
      this.cities = this.siquijor;
    }
    else if(event === 'Sorsogon') {
      this.cities = this.sorsogon;
    }
    else if(event === 'South Cotabato') {
      this.cities = this.southCotabato;
    }
    else if(event === 'Southern Leyte') {
      this.cities = this.southernLeyte;
    }
    else if(event === 'Sultan Kudarat') {
      this.cities = this.sultanKudarat;
    }
    else if(event === 'Sulu') {
      this.cities = this.sulu;
    }
    else if(event === 'Surigao Del Norte') {
      this.cities = this.surigaoDelNorte;
    }
    else if(event === 'Surigao Del Sur') {
      this.cities = this.surigaoDelSur;
    }
    else if(event === 'Tarlac') {
      this.cities = this.tarlac;
    }
    else if(event === 'Tawi-Tawi') {
      this.cities = this.tawiTawi;
    }
    else if(event === 'Zambales') {
      this.cities = this.zambales;
    }
    else if(event === 'Zamboanga Del Norte') {
      this.cities = this.zamboangaDelNorte;
    }
    else if(event === 'Zamboanga Del Sur') {
      this.cities = this.zamboangaDelSur;
    }
    else if(event === 'Zamboanga-Sibugay') {
      this.cities = this.zamboangaSibugay;
    }
    else if(event === 'Dinagat Islands') {
      this.cities = this.dinagatIslands;
    }
  }
  async onChange(event: any) {

    if(event === 'Certification of Grades' || event === 'Certified True Copy of Registration Form' || event === 'Transcript of Records') {
      this.offices = [];
      this.offices = ['Registrar'];

    }
    else if(event === 'ID Application') {
      this.offices = [];
      this.offices = ['Academic Services'];

    }
    else if(event === 'ACE Form' || event === 'Completion of INC Grades' || event === 'Subject Accreditation') {
      this.offices = [];
      this.offices = ['Registrar', 'Academic Services'];

    }
    else if(event === 'Application Form for Late Reporting of Grade' || event === 'Completion of INC Grades' || event === 'Correction Of Entry') {
      this.offices = [];
      this.offices = ['Office of the Campus Director'];
    }

  }

  select(event: any) {

    if(event === 'meetingStaff') {
      this.transactions = [
        {meet: "Inquiry"},
        {meet: "Personal Reasons"},
        {meet: "Research Purpose (Interview, etc.)"}
      ];
      this.visible = true;

    }
    else if(event === 'processingDocuments') {
      this.transactions = [
        {meet: "Certification of Grades"},
        {meet: "Certified True Copy of Registration Form"},
        {meet: "Transcript of Records"},
        {meet: "ID Application"},
        {meet: "ACE Form"},
        {meet: "Application Form for Late Reporting of Grade"},
        {meet: "Completion of INC Grades"},
        {meet: "Correction of Entry"},
        {meet: "Subject Accreditation"},
      ];
      this.visible = false;
    }

  }
  async onSelect(event: any) {
    var getDateName = new Date(event.detail.value);
    var dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    this.dateName = dayNames[getDateName.getDay()];
    var todayDate = new Date(event.detail.value).toISOString().slice(0, 10);
    let docRef = doc(this.db, 'slots', todayDate);
    let docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        if(docSnap.data().timeSlot.office === 'Registrar') {
          this.eight = docSnap.data().timeSlot.EIGHT;
          this.nine = docSnap.data().timeSlot.NINE;
          this.ten = docSnap.data().timeSlot.TEN;
          this.one = docSnap.data().timeSlot.ONE;
          this.two = docSnap.data().timeSlot.TWO;
          this.three = docSnap.data().timeSlot.THREE;
          this.four = docSnap.data().timeSlot.FOUR;
        }
         else {
          this.eight = 10;
          this.nine = 10;
          this.ten = 10;
          this.one = 10;
          this.two = 10;
          this.three = 10;
          this.four = 10;
        }
      }

      else {
        this.eight = 10;
        this.nine = 10;
        this.ten = 10;
        this.one = 10;
        this.two = 10;
        this.three = 10;
        this.four = 10;
      }
    }
    async onSelectAcad(event: any) {
      var getDateName = new Date(event.detail.value);
      var dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      this.dateName = dayNames[getDateName.getDay()];
      var todayDate = new Date(event.detail.value).toISOString().slice(0, 10);
      const docRef = doc(this.db, 'slots', todayDate);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        if(docSnap.data().timeSlot.office === 'Academic Services') {
          this.eight2 = docSnap.data().timeSlot.EIGHT;
          this.nine2 = docSnap.data().timeSlot.NINE;
          this.ten2 = docSnap.data().timeSlot.TEN;
          this.one2 = docSnap.data().timeSlot.ONE;
          this.two2 = docSnap.data().timeSlot.TWO;
          this.three2 = docSnap.data().timeSlot.THREE;
          this.four2 = docSnap.data().timeSlot.FOUR;
        }
      } else {
          this.eight2 = 10;
          this.nine2 = 10;
          this.ten2 = 10;
          this.one2 = 10;
          this.two2 = 10;
          this.three2 = 10;
          this.four2 = 10;
      }
    }

  dateMin: String = new Date().toISOString();
  booking!: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.booking = this.formBuilder.group({
      purpose: new FormControl('', [Validators.required]),
      documents: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      fname: new FormControl('',  [Validators.required, Validators.min(2), Validators.pattern('[a-zA-Z- ]*')]),
      mname: new FormControl('', [Validators.min(2), Validators.pattern('[a-zA-Z- ]*')]),
      lname: new FormControl('',  [Validators.min(2), Validators.required, Validators.pattern('[a-zA-Z- ]*')]),
      suffix: new FormControl('', [Validators.pattern('[a-zA-Z- ]*')]),
      email: new FormControl('',  [Validators.required]),
      contactno: new FormControl('', [Validators.required]),
      course: new FormControl('', [Validators.required]),
      yearAndSection: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      studno: new FormControl('', [Validators.required, Validators.pattern(/\d{4}-\d{5}-SR-0/)]),
      time: new FormControl('', [Validators.required]),
      meet: new FormControl(''),
      birthday: new FormControl('', [Validators.required]),
      homeAddress: new FormControl('', [Validators.required]),
      baranggay: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      suffixEmail: new FormControl({value: "@iskolarngbayan.pup.edu.ph", disabled: true}),
      verifyEmail: new FormControl('', Validators.required)
    });
  }

  get fc() {
    return this.booking.controls;
  }


  sendCode() {

    this.disable = false;
    const email = this.fc.email.value + this.fc.suffixEmail.value;
    const name = this.fc.lname.value.toUpperCase() + " " + this.fc.suffix.value.toUpperCase() + ", " + this.fc.fname.value.toUpperCase() + " " + this.fc.mname.value.toUpperCase();
    this.interval = setInterval(() => {
      if(this.countdown > 0) {
        this.countdown--;

      } else {
        clearInterval(this.interval);
        this.disable = true;
        this.countdown = 3;
      }
    }, 1000)
    this.code = sendVerification(email, name);

  }

  verifyCode() {
    alert(this.fc.verifyEmail.value);
    if(this.fc.verifyEmail.value === this.code) {
      this.codeMatch = true;
    }
    else {
      this.codeMatch = false;
    }
  }
  async onSubmit() {
    this.isSubmitted = true;
    let name =  this.fc.lname.value.toUpperCase() + ", " + this.fc.fname.value.toUpperCase();
    let nameValidate = this.fc.lname.value.toUpperCase() + " " + this.fc.suffix.value.toUpperCase() + ", " + this.fc.fname.value.toUpperCase() + " " + this.fc.mname.value.toUpperCase();
    let docRef = doc(this.db, 'studentAuth', name);
    let docSnap = await getDoc(docRef);
    if(this.booking.invalid) {
      alert("Check if all fields are correct");
    }
    else if(!this.codeMatch) {
      alert("Email is not verified!");
    }
    else {
        if(docSnap.exists()) {
          let studnoError = this.fc.studno.value != docSnap.data().studentno;
          let bdayError = this.fc.birthday.value != docSnap.data().bday;
          let nameError = nameValidate != docSnap.data().name;
          if(studnoError || bdayError || nameError) {
            alert("Student Number and Birthday doesn't match. Make sure that your birthday and student number matches similar to your credentials so that you will be considered as Student.");
          }
          else {
            let name = this.fc.lname.value + ", " + this.fc.fname.value;
            var todayDate = new Date(this.fc.date.value).toISOString().slice(0, 10);

              await setDoc(doc(this.db, 'studentBookings', name), {
                name: this.fc.lname.value.toUpperCase() + " " + this.fc.suffix.value.toUpperCase() + ", " + this.fc.fname.value.toUpperCase() + " " + this.fc.mname.value.toUpperCase(),
                purpose: this.fc.purpose.value,
                documents: this.fc.documents.value,
                date: todayDate,
                day: this.dateName,
                email: this.fc.email.value + this.fc.suffixEmail.value,
                contactno: this.fc.contactno.value,
                course: this.fc.course.value,
                yearAndSection: this.fc.yearAndSection.value,
                gender: this.fc.gender.value,
                studno: this.fc.studno.value,
                birthday: this.fc.birthday.value,
                time: this.fc.time.value,
                address: this.fc.homeAddress.value.toUpperCase() + ". " + this.fc.baranggay.value.toUpperCase() + ". " + this.fc.city.value.toUpperCase() + ", " + this.fc.province.value.toUpperCase(),
                status: "Pending"
              });

              const docRef = doc(this.db, 'slots', todayDate);
              const docSnap = await getDoc(docRef);

              if(docSnap.exists()) {
                let slot;
                this.offices.forEach(async (item: any, index: any) => {
                  if(docSnap.data().timeSlot.office === item) {

                    if(this.fc.time.value === '8:00 AM - 9:00 AM') {
                      slot = docSnap.data().timeSlot.EIGHT - 1;
                      await updateDoc(docRef, {
                        "timeSlot.EIGHT": slot
                      });
                    }
                    else if(this.fc.time.value === '9:00 AM - 10:00 AM'){
                      slot = docSnap.data().timeSlot.NINE - 1;
                      await updateDoc(docRef, {
                          "timeSlot.NINE": slot
                      });
                    }
                    else if(this.fc.time.value === '10:00 AM - 11:00 AM'){
                      slot = docSnap.data().timeSlot.TEN - 1;
                      await updateDoc(docRef, {
                          "timeSlot.TEN": slot
                      });
                    }
                    else if(this.fc.time.value === '1:00 PM - 2:00 PM'){
                      slot = docSnap.data().timeSlot.ONE - 1;
                      await updateDoc(docRef, {
                        "timeSlot.ONE": slot
                      });
                    }
                    else if(this.fc.time.value === '2:00 PM - 3:00 PM'){
                      slot = docSnap.data().timeSlot.TWO - 1;
                      await updateDoc(docRef, {
                        "timeSlot.TWO": slot
                      });
                    }
                    else if(this.fc.time.value === '3:00 PM - 4:00 PM'){
                      slot = docSnap.data().timeSlot.THREE - 1;
                      await updateDoc(docRef, {
                        "timeSlot.THREE": slot
                      });
                    }
                    else if(this.fc.time.value === '4:00 PM - 5:00 PM'){
                      slot = docSnap.data().timeSlot.FOUR - 1;
                      await updateDoc(docRef, {
                        "timeSlot.FOUR": slot
                      });
                    }
                  }
                });
                }
                else {
                  this.offices.forEach(async (item: any, index: any) => {
                    if(this.fc.time.value === '8:00 AM - 9:00 AM') {
                      await setDoc(doc(this.db, 'slots', todayDate), {
                        timeSlot: {
                          EIGHT: 10 - 1,
                          NINE: 10,
                          TEN: 10,
                          ONE: 10,
                          TWO: 10,
                          THREE: 10,
                          FOUR: 10,
                          office: item
                        }
                      });
                    }
                    else if(this.fc.time.value === '9:00 AM - 10:00 AM') {
                      await setDoc(doc(this.db, 'slots', todayDate), {
                        timeSlot: {
                          EIGHT: 10,
                          NINE: 10 - 1,
                          TEN: 10,
                          ONE: 10,
                          TWO: 10,
                          THREE: 10,
                          FOUR: 10,
                          office: item
                        }
                      });
                    }
                    else if(this.fc.time.value === '10:00 AM - 11:00 AM') {
                      await setDoc(doc(this.db, 'slots', todayDate), {
                        timeSlot: {
                          EIGHT: 10,
                          NINE: 10,
                          TEN: 10 - 1,
                          ONE: 10,
                          TWO: 10,
                          THREE: 10,
                          FOUR: 10,
                          office: item
                        }
                      });
                    }
                    else if(this.fc.time.value === '1:00 PM - 2:00 PM') {
                      await setDoc(doc(this.db, 'slots', todayDate), {
                        timeSlot: {
                          EIGHT: 10,
                          NINE: 10,
                          TEN: 10,
                          ONE: 10 - 1,
                          TWO: 10,
                          THREE: 10,
                          FOUR: 10,
                          office: item
                        }
                      });
                    }
                    else if(this.fc.time.value === '2:00 PM - 3:00 PM') {
                      await setDoc(doc(this.db, 'slots', todayDate), {
                        timeSlot: {
                          EIGHT: 10,
                          NINE: 10,
                          TEN: 10,
                          ONE: 10,
                          TWO: 10 - 1,
                          THREE: 10,
                          FOUR: 10,
                          office: item
                        }
                      });
                    }
                    if(this.fc.time.value === '3:00 PM - 4:00 AM') {
                      await setDoc(doc(this.db, 'slots', todayDate), {
                        timeSlot: {
                          EIGHT: 10,
                          NINE: 10,
                          TEN: 10,
                          ONE: 10,
                          TWO: 10,
                          THREE: 10 - 1,
                          FOUR: 10,
                          office: item
                        }
                      });
                    }
                    else if(this.fc.time.value === '4:00 PM - 5:00 PM') {
                      await setDoc(doc(this.db, 'slots', todayDate), {
                        timeSlot: {
                          EIGHT: 10,
                          NINE: 10,
                          TEN: 10,
                          ONE: 10,
                          TWO: 10,
                          THREE: 10,
                          FOUR: 10 - 1,
                          office: item
                        }
                      });
                    }
                  });
                }
            const email = this.fc.email.value + this.fc.suffixEmail.value;
            name = this.fc.lname.value.toUpperCase() + " " + this.fc.suffix.value.toUpperCase() + ", " + this.fc.fname.value.toUpperCase() + " " + this.fc.mname.value.toUpperCase();
            SendEmailVerification(email, name);
            }
          }
          else {
            alert("Your student number and birthday didn't match our system.");
          }
        }
      }
  }


