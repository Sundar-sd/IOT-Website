import { Product, Category } from './types';

export const categories: Category[] = [
  { id: 'c1', name: 'Arduino Boards', image: 'https://placehold.co/500x500/1e293b/ffffff?text=Arduino+Boards' },
  { id: 'c2', name: 'ESP32 Boards', image: 'https://placehold.co/500x500/1e293b/ffffff?text=ESP32+Boards' },
  { id: 'c3', name: 'Raspberry Pi', image: 'https://placehold.co/500x500/1e293b/ffffff?text=Raspberry+Pi' },
  { id: 'c4', name: 'Sensors', image: 'https://placehold.co/500x500/1e293b/ffffff?text=Sensors' },
  { id: 'c5', name: 'Robotics Kits', image: 'https://placehold.co/500x500/1e293b/ffffff?text=Robotics+Kits' },
  { id: 'c6', name: 'Drone Parts', image: 'https://placehold.co/500x500/1e293b/ffffff?text=Drone+Parts' },
  { id: 'c7', name: 'Motors', image: 'https://placehold.co/500x500/1e293b/ffffff?text=Motors' },
  { id: 'c8', name: 'Displays', image: 'https://placehold.co/500x500/1e293b/ffffff?text=Displays' },
  { id: 'c9', name: 'Power Supplies', image: 'https://placehold.co/500x500/1e293b/ffffff?text=Power+Supplies' },
  { id: 'c10', name: 'Components', image: 'https://placehold.co/500x500/1e293b/ffffff?text=Components' },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Uno R3",
    description: "High quality Uno R3 for arduino boards projects.",
    price: 448,
    oldPrice: 2442,
    rating: 4.6,
    category: "Arduino Boards",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80",
    badge: "Best Seller"
  },
  {
    id: "p2",
    name: "Mega 2560",
    description: "High quality Mega 2560 for arduino boards projects.",
    price: 231,
    oldPrice: 1428,
    rating: 4.5,
    category: "Arduino Boards",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80",
    badge: "New"
  },
  {
    id: "p3",
    name: "Nano V3.0",
    description: "High quality Nano V3.0 for arduino boards projects.",
    price: 261,
    oldPrice: 2009,
    rating: 4.1,
    category: "Arduino Boards",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80",
    badge: "Sale"
  },
  {
    id: "p4",
    name: "Micro",
    description: "High quality Micro for arduino boards projects.",
    price: 156,
    oldPrice: 2558,
    rating: 4.5,
    category: "Arduino Boards",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p5",
    name: "Pro Mini 5V",
    description: "High quality Pro Mini 5V for arduino boards projects.",
    price: 469,
    oldPrice: 1457,
    rating: 4.9,
    category: "Arduino Boards",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p6",
    name: "Leonardo",
    description: "High quality Leonardo for arduino boards projects.",
    price: 945,
    oldPrice: 1885,
    rating: 4.7,
    category: "Arduino Boards",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p7",
    name: "Due 32-bit",
    description: "High quality Due 32-bit for arduino boards projects.",
    price: 651,
    oldPrice: 1812,
    rating: 4.7,
    category: "Arduino Boards",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p8",
    name: "MKR WiFi 1010",
    description: "High quality MKR WiFi 1010 for arduino boards projects.",
    price: 170,
    oldPrice: 2458,
    rating: 4.3,
    category: "Arduino Boards",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p9",
    name: "ESP32 DevKit V1",
    description: "High quality ESP32 DevKit V1 for esp32 boards projects.",
    price: 134,
    oldPrice: 1278,
    rating: 5,
    category: "ESP32 Boards",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
    badge: "Best Seller"
  },
  {
    id: "p10",
    name: "NodeMCU ESP8266",
    description: "High quality NodeMCU ESP8266 for esp32 boards projects.",
    price: 261,
    oldPrice: 1546,
    rating: 4,
    category: "ESP32 Boards",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
    badge: "New"
  },
  {
    id: "p11",
    name: "ESP32-CAM with OV2640",
    description: "High quality ESP32-CAM with OV2640 for esp32 boards projects.",
    price: 732,
    oldPrice: 1861,
    rating: 4.7,
    category: "ESP32 Boards",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
    badge: "Sale"
  },
  {
    id: "p12",
    name: "Wemos D1 Mini",
    description: "High quality Wemos D1 Mini for esp32 boards projects.",
    price: 161,
    oldPrice: 1555,
    rating: 4.6,
    category: "ESP32 Boards",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p13",
    name: "ESP32-S2 Saola",
    description: "High quality ESP32-S2 Saola for esp32 boards projects.",
    price: 922,
    oldPrice: 1704,
    rating: 4.3,
    category: "ESP32 Boards",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p14",
    name: "ESP32-S3 DevKitC",
    description: "High quality ESP32-S3 DevKitC for esp32 boards projects.",
    price: 648,
    oldPrice: 1226,
    rating: 4.7,
    category: "ESP32 Boards",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p15",
    name: "ESP32-C3 SuperMini",
    description: "High quality ESP32-C3 SuperMini for esp32 boards projects.",
    price: 275,
    oldPrice: 1468,
    rating: 5,
    category: "ESP32 Boards",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p16",
    name: "ESP32 WROOM-32U",
    description: "High quality ESP32 WROOM-32U for esp32 boards projects.",
    price: 317,
    oldPrice: 2072,
    rating: 5,
    category: "ESP32 Boards",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p17",
    name: "Pi 5 8GB",
    description: "High quality Pi 5 8GB for raspberry pi projects.",
    price: 604,
    oldPrice: 2140,
    rating: 4.7,
    category: "Raspberry Pi",
    image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=500&q=80",
    badge: "Best Seller"
  },
  {
    id: "p18",
    name: "Pi 4 Model B 4GB",
    description: "High quality Pi 4 Model B 4GB for raspberry pi projects.",
    price: 390,
    oldPrice: 2527,
    rating: 4.9,
    category: "Raspberry Pi",
    image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=500&q=80",
    badge: "New"
  },
  {
    id: "p19",
    name: "Pi 4 Model B 8GB",
    description: "High quality Pi 4 Model B 8GB for raspberry pi projects.",
    price: 986,
    oldPrice: 1729,
    rating: 4.9,
    category: "Raspberry Pi",
    image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=500&q=80",
    badge: "Sale"
  },
  {
    id: "p20",
    name: "Pi 3 Model B+",
    description: "High quality Pi 3 Model B+ for raspberry pi projects.",
    price: 592,
    oldPrice: 1555,
    rating: 4.2,
    category: "Raspberry Pi",
    image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p21",
    name: "Pi Zero 2 W",
    description: "High quality Pi Zero 2 W for raspberry pi projects.",
    price: 594,
    oldPrice: 2170,
    rating: 4.6,
    category: "Raspberry Pi",
    image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p22",
    name: "Pi Pico Microcontroller",
    description: "High quality Pi Pico Microcontroller for raspberry pi projects.",
    price: 140,
    oldPrice: 2229,
    rating: 4.1,
    category: "Raspberry Pi",
    image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p23",
    name: "Pi Pico W (WiFi)",
    description: "High quality Pi Pico W (WiFi) for raspberry pi projects.",
    price: 595,
    oldPrice: 2217,
    rating: 4.2,
    category: "Raspberry Pi",
    image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p24",
    name: "Compute Module 4",
    description: "High quality Compute Module 4 for raspberry pi projects.",
    price: 286,
    oldPrice: 2652,
    rating: 4.6,
    category: "Raspberry Pi",
    image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p25",
    name: "Ultrasonic HC-SR04",
    description: "High quality Ultrasonic HC-SR04 for sensors projects.",
    price: 240,
    oldPrice: 2697,
    rating: 4.8,
    category: "Sensors",
    image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?auto=format&fit=crop&w=500&q=80",
    badge: "Best Seller"
  },
  {
    id: "p26",
    name: "DHT11 Temp/Humidity",
    description: "High quality DHT11 Temp/Humidity for sensors projects.",
    price: 824,
    oldPrice: 2659,
    rating: 4.6,
    category: "Sensors",
    image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?auto=format&fit=crop&w=500&q=80",
    badge: "New"
  },
  {
    id: "p27",
    name: "PIR Motion Sensor HC-SR501",
    description: "High quality PIR Motion Sensor HC-SR501 for sensors projects.",
    price: 985,
    oldPrice: 2102,
    rating: 5,
    category: "Sensors",
    image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?auto=format&fit=crop&w=500&q=80",
    badge: "Sale"
  },
  {
    id: "p28",
    name: "MPU6050 Gyro/Accel",
    description: "High quality MPU6050 Gyro/Accel for sensors projects.",
    price: 329,
    oldPrice: 1222,
    rating: 4.1,
    category: "Sensors",
    image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p29",
    name: "LDR Light Sensor Module",
    description: "High quality LDR Light Sensor Module for sensors projects.",
    price: 534,
    oldPrice: 2248,
    rating: 4.6,
    category: "Sensors",
    image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p30",
    name: "Soil Moisture Sensor",
    description: "High quality Soil Moisture Sensor for sensors projects.",
    price: 332,
    oldPrice: 2035,
    rating: 5,
    category: "Sensors",
    image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p31",
    name: "IR Obstacle Avoidance",
    description: "High quality IR Obstacle Avoidance for sensors projects.",
    price: 500,
    oldPrice: 1515,
    rating: 4.9,
    category: "Sensors",
    image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p32",
    name: "MQ-135 Air Quality Gas",
    description: "High quality MQ-135 Air Quality Gas for sensors projects.",
    price: 706,
    oldPrice: 1586,
    rating: 4.8,
    category: "Sensors",
    image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p33",
    name: "2WD Smart Robot Car Kit",
    description: "High quality 2WD Smart Robot Car Kit for robotics kits projects.",
    price: 512,
    oldPrice: 1372,
    rating: 4.2,
    category: "Robotics Kits",
    image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&w=500&q=80",
    badge: "Best Seller"
  },
  {
    id: "p34",
    name: "4WD Omni-directional Car",
    description: "High quality 4WD Omni-directional Car for robotics kits projects.",
    price: 637,
    oldPrice: 2302,
    rating: 4.4,
    category: "Robotics Kits",
    image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&w=500&q=80",
    badge: "New"
  },
  {
    id: "p35",
    name: "6 DOF Robotic Arm Kit",
    description: "High quality 6 DOF Robotic Arm Kit for robotics kits projects.",
    price: 607,
    oldPrice: 2269,
    rating: 4.5,
    category: "Robotics Kits",
    image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&w=500&q=80",
    badge: "Sale"
  },
  {
    id: "p36",
    name: "Biped Walking Robot",
    description: "High quality Biped Walking Robot for robotics kits projects.",
    price: 520,
    oldPrice: 1235,
    rating: 4.1,
    category: "Robotics Kits",
    image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p37",
    name: "Line Follower Robot Kit",
    description: "High quality Line Follower Robot Kit for robotics kits projects.",
    price: 466,
    oldPrice: 1968,
    rating: 4.9,
    category: "Robotics Kits",
    image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p38",
    name: "Self-Balancing Robot Kit",
    description: "High quality Self-Balancing Robot Kit for robotics kits projects.",
    price: 897,
    oldPrice: 1388,
    rating: 4.6,
    category: "Robotics Kits",
    image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p39",
    name: "Hexapod Spider Robot",
    description: "High quality Hexapod Spider Robot for robotics kits projects.",
    price: 713,
    oldPrice: 2491,
    rating: 4.2,
    category: "Robotics Kits",
    image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p40",
    name: "STEM Educational Robot",
    description: "High quality STEM Educational Robot for robotics kits projects.",
    price: 180,
    oldPrice: 2394,
    rating: 4.7,
    category: "Robotics Kits",
    image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p41",
    name: "A2212 1000KV Brushless Motor",
    description: "High quality A2212 1000KV Brushless Motor for drone parts projects.",
    price: 407,
    oldPrice: 1667,
    rating: 4.4,
    category: "Drone Parts",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80",
    badge: "Best Seller"
  },
  {
    id: "p42",
    name: "30A SimonK ESC",
    description: "High quality 30A SimonK ESC for drone parts projects.",
    price: 421,
    oldPrice: 2108,
    rating: 4.8,
    category: "Drone Parts",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80",
    badge: "New"
  },
  {
    id: "p43",
    name: "F4 V3S Flight Controller",
    description: "High quality F4 V3S Flight Controller for drone parts projects.",
    price: 624,
    oldPrice: 1369,
    rating: 4.5,
    category: "Drone Parts",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80",
    badge: "Sale"
  },
  {
    id: "p44",
    name: "1045 Propeller Pair",
    description: "High quality 1045 Propeller Pair for drone parts projects.",
    price: 629,
    oldPrice: 2227,
    rating: 4.1,
    category: "Drone Parts",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p45",
    name: "F450 Quadcopter Frame",
    description: "High quality F450 Quadcopter Frame for drone parts projects.",
    price: 267,
    oldPrice: 1615,
    rating: 4.6,
    category: "Drone Parts",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p46",
    name: "5.8G FPV Camera VTX",
    description: "High quality 5.8G FPV Camera VTX for drone parts projects.",
    price: 628,
    oldPrice: 2257,
    rating: 4.2,
    category: "Drone Parts",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p47",
    name: "GPS Module M8N",
    description: "High quality GPS Module M8N for drone parts projects.",
    price: 460,
    oldPrice: 1947,
    rating: 4.1,
    category: "Drone Parts",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p48",
    name: "Power Distribution Board",
    description: "High quality Power Distribution Board for drone parts projects.",
    price: 232,
    oldPrice: 1963,
    rating: 4.1,
    category: "Drone Parts",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p49",
    name: "SG90 Micro Servo",
    description: "High quality SG90 Micro Servo for motors projects.",
    price: 264,
    oldPrice: 2092,
    rating: 5,
    category: "Motors",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=500&q=80",
    badge: "Best Seller"
  },
  {
    id: "p50",
    name: "MG996R Metal Gear Servo",
    description: "High quality MG996R Metal Gear Servo for motors projects.",
    price: 280,
    oldPrice: 1994,
    rating: 4.7,
    category: "Motors",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=500&q=80",
    badge: "New"
  },
  {
    id: "p51",
    name: "NEMA 17 Stepper Motor",
    description: "High quality NEMA 17 Stepper Motor for motors projects.",
    price: 689,
    oldPrice: 1778,
    rating: 4.2,
    category: "Motors",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=500&q=80",
    badge: "Sale"
  },
  {
    id: "p52",
    name: "BO Motor 150 RPM",
    description: "High quality BO Motor 150 RPM for motors projects.",
    price: 493,
    oldPrice: 1801,
    rating: 4.1,
    category: "Motors",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p53",
    name: "775 DC Motor High Speed",
    description: "High quality 775 DC Motor High Speed for motors projects.",
    price: 761,
    oldPrice: 2493,
    rating: 4.3,
    category: "Motors",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p54",
    name: "Coreless Motor 3.7V",
    description: "High quality Coreless Motor 3.7V for motors projects.",
    price: 509,
    oldPrice: 2378,
    rating: 4.4,
    category: "Motors",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p55",
    name: "28BYJ-48 Stepper with ULN2003",
    description: "High quality 28BYJ-48 Stepper with ULN2003 for motors projects.",
    price: 229,
    oldPrice: 1617,
    rating: 4.3,
    category: "Motors",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p56",
    name: "Planetary Gear Motor 12V",
    description: "High quality Planetary Gear Motor 12V for motors projects.",
    price: 109,
    oldPrice: 1938,
    rating: 4.9,
    category: "Motors",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p57",
    name: "0.96 inch OLED I2C",
    description: "High quality 0.96 inch OLED I2C for displays projects.",
    price: 283,
    oldPrice: 1918,
    rating: 4.1,
    category: "Displays",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=500&q=80",
    badge: "Best Seller"
  },
  {
    id: "p58",
    name: "16x2 LCD with I2C Module",
    description: "High quality 16x2 LCD with I2C Module for displays projects.",
    price: 279,
    oldPrice: 2470,
    rating: 4.9,
    category: "Displays",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=500&q=80",
    badge: "New"
  },
  {
    id: "p59",
    name: "2.4 inch TFT Touch Screen",
    description: "High quality 2.4 inch TFT Touch Screen for displays projects.",
    price: 520,
    oldPrice: 2010,
    rating: 4.8,
    category: "Displays",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=500&q=80",
    badge: "Sale"
  },
  {
    id: "p60",
    name: "3.5 inch TFT LCD for Pi",
    description: "High quality 3.5 inch TFT LCD for Pi for displays projects.",
    price: 765,
    oldPrice: 2366,
    rating: 4.4,
    category: "Displays",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p61",
    name: "20x4 Character LCD",
    description: "High quality 20x4 Character LCD for displays projects.",
    price: 316,
    oldPrice: 2174,
    rating: 4.3,
    category: "Displays",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p62",
    name: "4-Digit 7-Segment Display",
    description: "High quality 4-Digit 7-Segment Display for displays projects.",
    price: 108,
    oldPrice: 1242,
    rating: 4.7,
    category: "Displays",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p63",
    name: "8x8 LED Matrix MAX7219",
    description: "High quality 8x8 LED Matrix MAX7219 for displays projects.",
    price: 181,
    oldPrice: 2586,
    rating: 4.8,
    category: "Displays",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p64",
    name: "2.13 inch E-Ink Display",
    description: "High quality 2.13 inch E-Ink Display for displays projects.",
    price: 392,
    oldPrice: 1618,
    rating: 4.6,
    category: "Displays",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p65",
    name: "12V 5A Power Adapter",
    description: "High quality 12V 5A Power Adapter for power supplies projects.",
    price: 686,
    oldPrice: 1754,
    rating: 4.8,
    category: "Power Supplies",
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=500&q=80",
    badge: "Best Seller"
  },
  {
    id: "p66",
    name: "5V 2A Power Adapter",
    description: "High quality 5V 2A Power Adapter for power supplies projects.",
    price: 490,
    oldPrice: 1977,
    rating: 4.1,
    category: "Power Supplies",
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=500&q=80",
    badge: "New"
  },
  {
    id: "p67",
    name: "Li-Po Battery 11.1V 2200mAh",
    description: "High quality Li-Po Battery 11.1V 2200mAh for power supplies projects.",
    price: 514,
    oldPrice: 2343,
    rating: 4.8,
    category: "Power Supplies",
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=500&q=80",
    badge: "Sale"
  },
  {
    id: "p68",
    name: "18650 Li-ion Battery 2600mAh",
    description: "High quality 18650 Li-ion Battery 2600mAh for power supplies projects.",
    price: 807,
    oldPrice: 2189,
    rating: 4.3,
    category: "Power Supplies",
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p69",
    name: "2-Slot 18650 Battery Holder",
    description: "High quality 2-Slot 18650 Battery Holder for power supplies projects.",
    price: 289,
    oldPrice: 2162,
    rating: 4.3,
    category: "Power Supplies",
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p70",
    name: "TP4056 Battery Charger Module",
    description: "High quality TP4056 Battery Charger Module for power supplies projects.",
    price: 143,
    oldPrice: 1347,
    rating: 4.5,
    category: "Power Supplies",
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p71",
    name: "MT3608 Boost Converter",
    description: "High quality MT3608 Boost Converter for power supplies projects.",
    price: 882,
    oldPrice: 1393,
    rating: 4.7,
    category: "Power Supplies",
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p72",
    name: "LM2596 Buck Converter Module",
    description: "High quality LM2596 Buck Converter Module for power supplies projects.",
    price: 563,
    oldPrice: 2340,
    rating: 4.8,
    category: "Power Supplies",
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p73",
    name: "830 Tie-Points Breadboard",
    description: "High quality 830 Tie-Points Breadboard for components projects.",
    price: 959,
    oldPrice: 2001,
    rating: 5,
    category: "Components",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=500&q=80",
    badge: "Best Seller"
  },
  {
    id: "p74",
    name: "Jumper Wires (M-M, M-F, F-F)",
    description: "High quality Jumper Wires (M-M, M-F, F-F) for components projects.",
    price: 696,
    oldPrice: 1857,
    rating: 4.1,
    category: "Components",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=500&q=80",
    badge: "New"
  },
  {
    id: "p75",
    name: "Resistor Kit (600pcs)",
    description: "High quality Resistor Kit (600pcs) for components projects.",
    price: 470,
    oldPrice: 1248,
    rating: 4.4,
    category: "Components",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=500&q=80",
    badge: "Sale"
  },
  {
    id: "p76",
    name: "Ceramic Capacitor Kit",
    description: "High quality Ceramic Capacitor Kit for components projects.",
    price: 958,
    oldPrice: 1405,
    rating: 4.5,
    category: "Components",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p77",
    name: "LED Assortment Kit (100pcs)",
    description: "High quality LED Assortment Kit (100pcs) for components projects.",
    price: 310,
    oldPrice: 1847,
    rating: 4.1,
    category: "Components",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p78",
    name: "Push Button Switch Pack",
    description: "High quality Push Button Switch Pack for components projects.",
    price: 977,
    oldPrice: 1997,
    rating: 4.2,
    category: "Components",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p79",
    name: "1-Channel 5V Relay Module",
    description: "High quality 1-Channel 5V Relay Module for components projects.",
    price: 760,
    oldPrice: 2271,
    rating: 4.8,
    category: "Components",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p80",
    name: "Transistor Assortment Kit",
    description: "High quality Transistor Assortment Kit for components projects.",
    price: 526,
    oldPrice: 1772,
    rating: 4.4,
    category: "Components",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=500&q=80"
  }
];

export const offers = [
  "🔥 50% OFF on Robotics Kits",
  "⚡ Buy 2 Sensors Get 1 Free",
  "🎁 Free Shipping Above ₹999",
  "🤖 New Arduino Boards Available",
  "💥 Mega Sale on Battery Packs"
];

export const features = [
  { title: "Fast Delivery", description: "Across the country", icon: "Truck" },
  { title: "Premium Quality", description: "Tested components", icon: "Award" },
  { title: "100% Genuine", description: "Original parts only", icon: "ShieldCheck" },
  { title: "Easy Returns", description: "7-day return policy", icon: "RefreshCw" },
  { title: "24x7 Support", description: "Technical assistance", icon: "Headphones" },
  { title: "Secure Payments", description: "Encrypted gateways", icon: "Lock" }
];

export const testimonials = [
  { name: "Rahul Sharma", role: "Robotics Enthusiast", comment: "HariChandra has the best collection of ESP32 modules. Fast delivery and genuine products!", rating: 5 },
  { name: "Priya Desai", role: "Engineering Student", comment: "The robotics kits are perfectly packaged with excellent tutorials. My go-to store for projects.", rating: 5 },
  { name: "Amit Kumar", role: "IoT Developer", comment: "Exceptional quality sensors and very competitive pricing. The free shipping on bulk orders is a lifesaver.", rating: 4 }
];
