// import ipadPro from './assets/ipadPro.svg'
import ipadAir from '../../src/Components/assets/ipadAir.svg'
import ipad from '../../src/Components/assets/ipad.svg'
import ipadMini from '../../src/Components/assets/ipadMini.svg'
import compare from '../../src/Components/assets/compare.svg'
import applePencil from '../../src/Components/assets/applePencil.svg'
import keyboards from '../../src/Components/assets/keyboards.svg'
import accessories from '../../src/Components/assets/accessories.svg'
import ipadOs from '../../src/Components/assets/ipadOs.svg'
import shopIpad from '../../src/Components/assets/shopIpad.svg'
import AppleIntelligence from '../../src/Components/assets/appleIntelligence.jpg';
import Productivity from '../../src/Components/assets/productivity.jpg';
import Creativity from '../../src/Components/assets/creativity.jpg';
import Learning from '../../src/Components/assets/learning.jpg';
import Entertainment from '../../src/Components/assets/entertainment.jpg';
import ApplePencil from '../../src/Components/assets/applePencil.jpg';
import iPadOsApps from '../../src/Components/assets/iPadOsApps.jpg';
import iPadPro from '../../src/Components/assets/ipadProPng.png'
import m4Chip from '../../src/Components/assets/m4Chip.png'
import appleIntelligence from '../../src/Components/assets/appleIntelligencePng.png'
import tewelvempWideCamera from '../../src/Components/assets/12mpCamera.png'
import tewelvempFrontCamera from '../../src/Components/assets/12mpFrontCamera.png'
import pencil from '../../src/Components/assets/applePencilPng.png'
import magicKeyboard from '../../src/Components/assets/magicKeyboard.png'
import iPadAir from '../../src/Components/assets/iPadAirPng.png'
import m2Chip from '../../src/Components/assets/m2Chip.png'
import ipadAirKeyboard from '../../src/Components/assets/iPadAirKeyboard.png'
import iPadKeyboard from '../../src/Components/assets/ipadKeyboard.png'
import iPadAirCamera from '../../src/Components/assets/iPadAirCamera.png'
import iPad from '../../src/Components/assets/iPad.png'
import a14Chip from '../../src/Components/assets/a14Chip.png'
import iPadPencil from '../../src/Components/assets/iPadPencil.png'
import iPadMini from '../../src/Components/assets/iPadMiniPng.png'
import a17Chip from '../../src/Components/assets/a17Chip.png'
import iPadMiniWideCamera from '../../src/Components/assets/iPadMiniWideCamera.png'
import iPadMiniFrontCamera from '../../src/Components/assets/iPadMiniFrontCamera.png'
import iPadMiniKeyboard from '../../src/Components/assets/iPadMiniKeyboard.png'

export const AppleItems = [
    {
        name:'iPad Pro',
        img:ipadAir
    },
    {
        name:'iPad Air',
        img:ipadAir
    },
    {
        name:'iPad',
        img:ipad
    },
    {
        name:'iPad Mini',
        img:ipadMini
    },
    {
        name:'Compare',
        img:compare
    },
    {
        name:'Apple Pencil',
        img:applePencil
    },
    {
        name:'Keyboards',
        img:keyboards
    },
    {
        name:'Accessories',
        img:accessories
    },
    {
        name:'iPadOS 18',
        img:ipadOs
    },
    {
        name:'Shop iPad',
        img:shopIpad
    },
]
export const AppleSliderContent = [
    {
        sliderTitle:'Apple Intelligence',
        sliderDescription:'Personal, private, powerful.',
        img:AppleIntelligence

    },
    {
        sliderTitle:'Productivity',
        sliderDescription:'Your workplace can be any place.',
        img:Productivity     
    },
    {
        sliderTitle:'Creativity',
        sliderDescription:'Take your inner artist out and about.',
        img:Creativity   
    },
    {
        sliderTitle:'Learning',
        sliderDescription:'Your classroom can be anywhere.',
        img:Learning      
    },
    {
        sliderTitle:'Entertainment',
        sliderDescription:'Kick back. Tune in. Game on.',
        img:Entertainment     
    },
    {
        sliderTitle:'Apple Pencil',
        sliderDescription:'Dream it up. Jot it down.',
        img:ApplePencil   
    },
    {
        sliderTitle:'iPadOS + Apps',
        sliderDescription:'Everyday superpowers. Built right in.',
        img:iPadOsApps 
    },
]
export const IPadModelComparison = [
    {
        id:0,
        primaryImg:iPadPro,
        name:'iPad Pro',
        description:'The ultimate iPad experience with the most advanced technology.',
        prices:'From $999 or $83.25/mo. for 12 mo.',
        length:'13″ or 11″',
        display:'Ultra Retina XDR display4',
        promotion:"ProMotion Technology",
        color:'P3 wide color',
        models:'Nano-texture display glass option on 1TB and 2TB models',
        chipImg:m4Chip,
        chipName:"M4 chip",
        cameraImg:tewelvempWideCamera,
        cameraName:"12MP Wide camera",
        cameraQuality:"4K video, ProRes",
        frontCameraImg:tewelvempFrontCamera,
        frontCameraName:"Landscape 12MP Ultra Wide front camera",
        frontCameraQuality:"TrueDepth camera system",
        applePencilImg: pencil,
        applePencilPrimarySupport: "Supports Apple Pencil Pro",
        applePencilSecondarySupport:"Supports Apple Pencil (USB-C)",
        keyboardImg:magicKeyboard,
        keyboardName: "Support Magic Keyboard for iPad Pro (M4)",
        width:"271px",
        height:"340px"
    },
    {
        id:1,
        primaryImg:iPadAir,
        name:'iPad Air',
        description:'Serious performance in a thin and light design.',
        prices:'From $599 or $49.91/mo. for 12 mo.*',
        length:'13″ or 11″',
        display:'Liquid Retina display4',
        color:'P3 wide color',        
        chipImg:m2Chip,
        chipName:"M2 chip",
        cameraImg:iPadAirCamera,
        cameraName:"12MP Wide camera",
        cameraQuality:"4K video",
        frontCameraImg:tewelvempFrontCamera,
        frontCameraName:"Landscape 12MP Ultra Wide front camera",        
        applePencilImg: pencil,
        applePencilPrimarySupport: "Supports Apple Pencil Pro",
        applePencilSecondarySupport:"Supports Apple Pencil (USB-C)",
        keyboardImg:ipadAirKeyboard,
        keyboardName: "Support Magic Keyboard",
        width:"296px",
        height:"340px"
    },
    {
        id:2,
        primaryImg:iPad,
        name:'iPad',
        description:'The colorful, all‑screen iPad for the things you do every day.',
        prices:'From $349 or $29.08/mo. for 12 mo.*',
        length:'10.9″',
        display:'Liquid Retina display4',
        color:'sRGB color',        
        chipImg:a14Chip,
        chipName:"A14 Bionic chip",
        cameraImg:iPadAirCamera,
        cameraName:"12MP Wide camera",
        cameraQuality:"4K video",
        frontCameraImg:tewelvempFrontCamera,
        frontCameraName:"Landscape 12MP Ultra Wide front camera",        
        applePencilImg: iPadPencil,
        applePencilPrimarySupport: "Supports Apple Pencil (USB-C)",
        applePencilSecondarySupport:"Supports Apple Pencil (1st generation)5",
        keyboardImg:iPadKeyboard,
        keyboardName: "Supports Magic Keyboard Folio",
        width:"216px",
        height:"340px"
    },
    {
        id:3,
        primaryImg:iPadMini,
        name:'iPad mini',
        description:'The full iPad experience in an ultraportable design.',
        prices:'From $499 or $41.58/mo. for 12 mo.*',
        length:'8.3″',
        display:'Liquid Retina display4',
        color:'P3 wide color',        
        chipImg:a17Chip,
        chipName:"A17 Pro chip",
        cameraImg:iPadMiniWideCamera,
        cameraName:"12MP Wide camera",
        cameraQuality:"4K video",
        frontCameraImg:iPadMiniFrontCamera,
        frontCameraName:"12MP Ultra Wide front camera",        
        applePencilImg:pencil,
        applePencilPrimarySupport: "Supports Apple Pencil Pro",
        applePencilSecondarySupport:"Supports Apple Pencil (USB-C)",
        keyboardImg:iPadMiniKeyboard,
        keyboardName: "Supports Bluetooth keyboards",
        width:"167px",
        height:"340px"
    },
    
]