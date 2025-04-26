// Quiz questions extracted from the document
const questions = [
    // Assignment 1
    {
        question: "Which of those is not a consumptive value?",
        options: ["a. timber", "b. firewood", "c. non-timber forest products", "d. education"],
        correct: "d. education"
    },
    {
        question: "Which of these is not a forest type found in India?",
        options: ["a. Mediterranean dry", "b. Tropical dry", "c. Montane temperate", "d. Alpine"],
        correct: "a. Mediterranean dry"
    },
    {
        question: '"Plant community, predominantly comprised of trees and other woody vegetation, usually with a closed canopy" is',
        options: ["a. silvicultural definition of forests", "b. ecological definition of forests", "c. botanical definition of forests", "d. legal definition of forests"],
        correct: "a. silvicultural definition of forests"
    },
    // Assignment 3
    {
        question: "Mechanical action of ocean waves is an example of",
        options: ["a. chemical weathering", "b. physical weathering", "c. biological weathering", "d. none of the above"],
        correct: "b. physical weathering"
    },
    {
        question: "Khader is a type of",
        options: ["a. black cotton soil", "b. alluvial soil", "c. saline soil", "d. red and yellow soil"],
        correct: "b. alluvial soil"
    },
    {
        question: "In soil profile, C refers to",
        options: ["a. organic surface layer", "b. topsoil layer", "c. subsoil layer", "d. substratum layer"],
        correct: "d. substratum layer"
    },
    {
        question: "Regur is a term for",
        options: ["a. black cotton soil", "b. alluvial soil", "c. saline soil", "d. red and yellow soil"],
        correct: "a. black cotton soil"
    },
    {
        question: "Bangar is a type of",
        options: ["a. black cotton soil", "b. alluvial soil", "c. saline soil", "d. red and yellow soil"],
        correct: "b. alluvial soil"
    },
    {
        question: "Soil formation is dependent upon",
        options: ["a. vegetation", "b. time", "c. climate", "d. all of the above"],
        correct: "d. all of the above"
    },
    {
        question: "Thermal stresses lead to",
        options: ["a. chemical weathering", "b. physical weathering", "c. biological weathering", "d. none of the above"],
        correct: "b. physical weathering"
    },
    {
        question: "Carbonation is an example of",
        options: ["a. chemical weathering", "b. physical weathering", "c. biological weathering", "d. none of the above"],
        correct: "a. chemical weathering"
    },
    {
        question: "Cryofracturing is an example of",
        options: ["a. chemical weathering", "b. physical weathering", "c. biological weathering", "d. none of the above"],
        correct: "b. physical weathering"
    },
    {
        question: "Hydrolysis is an example of",
        options: ["a. chemical weathering", "b. physical weathering", "c. biological weathering", "d. none of the above"],
        correct: "a. chemical weathering"
    },
    // Assignment 4
    {
        question: "For absolute form factor, the reference for the base of the cylinder is",
        options: ["a. base of the tree", "b. breast height", "c. 10% of tree height", "d. 20% of tree height"],
        correct: "a. base of the tree"
    },
    {
        question: "For normal form factor, the reference for the base of the cylinder is",
        options: ["a. base of the tree", "b. breast height", "c. 10% of tree height", "d. 20% of tree height"],
        correct: "b. breast height"
    },
    {
        question: "In India, the breast height is considered to be",
        options: ["a. 1.37 m", "b. 1.47 m", "c. 1.57 m", "d. 2.47 m"],
        correct: "a. 1.37 m"
    },
    {
        question: "Measurement of height based on similar triangles comes under:",
        options: ["a. similar measurement", "b. dissimilar measurement", "c. direct measurement", "d. indirect measurement"],
        correct: "d. indirect measurement"
    },
    {
        question: "For a tree with dbh=45.6 cm, height=27 m and total stem volume of 1.78 cum, the artificial form factor for the tree is:",
        options: ["a. 0.1", "b. 0.2", "c. 0.3", "d. 0.4"],
        correct: "c. 0.3"
    },
    {
        question: "Consider a stand of eucalyptus trees that are on average 30 cm in diameter and spaced on a regular 3 m grid. Find the spacing factor.",
        options: ["a. 5", "b. 10", "c. 15", "d. data insufficient"],
        correct: "b. 10"
    },
    {
        question: "Diameter over bark (dob), diameter under bark (dub) and bark thickness (tb) are related as:",
        options: ["a. dob = dub + tb", "b. dob = dub - tb", "c. dob = dub + 2 × tb", "d. dob = dub - 2 × tb"],
        correct: "c. dob = dub + 2 × tb"
    },
    {
        question: "For false form factor, the reference for the base of the cylinder is",
        options: ["a. base of the tree", "b. breast height", "c. 10% of tree height", "d. 20% of tree height"],
        correct: "c. 10% of tree height"
    },
    {
        question: "Choose the correct statement:",
        options: [
            "a. For a non-circular cross-section, girth tape over-estimates the sectional area.",
            "b. For a non-circular cross-section, girth tape under-estimates the sectional area.",
            "c. For a non-circular cross-section, girth tape correctly estimates the sectional area.",
            "d. None of these is a correct statement."
        ],
        correct: "a. For a non-circular cross-section, girth tape over-estimates the sectional area."
    },
    {
        question: "A tree has dbh of 25 cm. Find its basal area in sq m.",
        options: ["a. 0.049", "b. 0.099", "c. 0.149", "d. 0.195"],
        correct: "a. 0.049"
    },
    // Assignment 5
    {
        question: '"This sampling employs a simple rule of selecting every kth unit starting with a number chosen at random from 1 to k as the random start." We’re talking about',
        options: ["a. Simple random sampling", "b. Systematic sampling", "c. Stratified sampling", "d. Multistage sampling"],
        correct: "b. Systematic sampling"
    },
    {
        question: "IMU stands for",
        options: ["a. Imperial metering unit", "b. Inertial metering unit", "c. Inertial measurement unit", "d. International measurement unit"],
        correct: "c. Inertial measurement unit"
    },
    {
        question: "____ is how close the measured values are to the correct value.",
        options: ["a. Accuracy", "b. Precision", "c. Bias", "d. Variance"],
        correct: "a. Accuracy"
    },
    {
        question: "A list of sampling units is called a",
        options: ["a. frame", "b. window", "c. sample", "d. population"],
        correct: "a. frame"
    },
    {
        question: "The time of flight for LIDAR is 0.00001 sec. Find the distance of the object from the instrument.",
        options: ["a. 500 m", "b. 1000 m", "c. 1500 m", "d. 2000 m"],
        correct: "c. 1500 m"
    },
    {
        question: "Which of these is correct?",
        options: [
            "a. Plane surveying takes into account the true shape of the Earth and is used for smaller areas (<250 sq km)",
            "b. Plane surveying takes into account the true shape of the Earth and is used for larger areas (>250 sq km)",
            "c. Geodetic surveying takes into account the true shape of the Earth and is used for smaller areas (<250 sq km)",
            "d. Geodetic surveying takes into account the true shape of the Earth and is used for larger areas (>250 sq km)"
        ],
        correct: "d. Geodetic surveying takes into account the true shape of the Earth and is used for larger areas (>250 sq km)"
    },
    {
        question: "A sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as",
        options: ["a. Simple random sampling", "b. Systematic sampling", "c. Stratified sampling", "d. Multistage sampling"],
        correct: "a. Simple random sampling"
    },
    {
        question: "The frequency of flyovers is an indicator of",
        options: ["a. spatial resolution", "b. temporal resolution", "c. spectral resolution", "d. radiometric resolution"],
        correct: "b. temporal resolution"
    },
    {
        question: "____ is how close the measured values are to each other.",
        options: ["a. Accuracy", "b. Precision", "c. Bias", "d. Variance"],
        correct: "b. Precision"
    },
    {
        question: "Bathymetric LiDAR uses",
        options: ["a. far infrared light", "b. near infrared light", "c. orange light", "d. green light"],
        correct: "d. green light"
    },
    // Assignment 6
    {
        question: "Invasive climbers increase the probability of which of these fire types?",
        options: ["a. ground fire", "b. surface fire", "c. ladder fire", "d. firestorm"],
        correct: "c. ladder fire"
    },
    {
        question: "Which of these forms the fire triangle?",
        options: ["a. fire, air, heat", "b. fire, oxygen, wood", "c. fuel, oxygen, heat", "d. fuel, air, heat"],
        correct: "c. fuel, oxygen, heat"
    },
    {
        question: "A scientist uses a trap to capture a monkey. In the context of Wildlife Protection Act 1972,",
        options: [
            "a. the trap is a weapon and capturing is hunting.",
            "b. the trap is not a weapon and capturing is hunting.",
            "c. the trap is a weapon and capturing is not hunting.",
            "d. the trap is not a weapon and capturing is not hunting."
        ],
        correct: "a. the trap is a weapon and capturing is hunting."
    },
    {
        question: "In the formula I = P × A × T, P refers to",
        options: ["a. professional pressure", "b. pollution pressure", "c. population pressure", "d. none of the above"],
        correct: "c. population pressure"
    },
    {
        question: "In the formula I = P × A × T, T refers to",
        options: ["a. transference", "b. time", "c. technology", "d. none of the above"],
        correct: "c. technology"
    },
    {
        question: "Which of these is a stochastic factor?",
        options: ["a. birth rate", "b. death rate", "c. population structure", "d. forest fire"],
        correct: "d. forest fire"
    },
    {
        question: "The acronym HIPPO does not include",
        options: ["a. habitat loss", "b. habitat enhancement", "c. over-harvesting", "d. human over-population"],
        correct: "b. habitat enhancement"
    },
    {
        question: "A veterinarian uses an immobilising gun to capture a deer. In the context of Wildlife Protection Act 1972,",
        options: [
            "a. the immobilising gun is a weapon and capturing is hunting.",
            "b. the immobilising gun is not a weapon and capturing is hunting.",
            "c. the immobilising gun is a weapon and capturing is not hunting.",
            "d. the immobilising gun is not a weapon and capturing is not hunting."
        ],
        correct: "c. the immobilising gun is a weapon and capturing is not hunting."
    },
    {
        question: "Which of these is a deterministic factor?",
        options: ["a. environmental variation", "b. forest fire", "c. death rate", "d. diseases"],
        correct: "c. death rate"
    },
    {
        question: "The acronym HIPPO does not include",
        options: ["a. habitat loss", "b. invasive species", "c. pollination", "d. pollution"],
        correct: "c. pollination"
    },
    // Assignment 7
    {
        question: "Taungya regeneration is",
        options: [
            "a. natural regeneration",
            "b. artificial regeneration with villagers",
            "c. artificial regeneration with nomadic tribes",
            "d. artificial regeneration with hunters and gatherers"
        ],
        correct: "b. artificial regeneration with villagers"
    },
    {
        question: "Which of these is not an advantage of clear felling system",
        options: [
            "a. Simple system, easy and efficient operations",
            "b. Allows for establishment of a more uniform crop",
            "c. Influences soil and pest conditions in a negative way",
            "d. Mimics natural processes of fire and large-scale insect attacks"
        ],
        correct: "c. Influences soil and pest conditions in a negative way"
    },
    {
        question: "Which of these is the correct sequence of a silvicultural system?",
        options: [
            "a. Stand tending → Regeneration → Harvesting",
            "b. Harvesting → Stand tending → Regeneration",
            "c. Harvesting → Regeneration → Stand tending",
            "d. Regeneration → Harvesting → Stand tending"
        ],
        correct: "c. Harvesting → Regeneration → Stand tending"
    },
    {
        question: "Ring weeding is primarily a feature of",
        options: [
            "a. natural regeneration",
            "b. assisted natural regeneration",
            "c. artificial regeneration by sowing",
            "d. artificial regeneration by planting seedlings"
        ],
        correct: "d. artificial regeneration by planting seedlings"
    },
    {
        question: "Tending is done during",
        options: ["a. early stage of life", "b. middle stage of life", "c. late stage of life", "d. any stage of life"],
        correct: "d. any stage of life"
    },
    {
        question: "The movement of seeds away from their place of seed production into a new area is called",
        options: ["a. translocation", "b. migration", "c. dispersal", "d. drifting"],
        correct: "c. dispersal"
    },
    {
        question: "Average age at which a tree is considered mature for felling is called as",
        options: ["a. crop age", "b. felling age", "c. rotation age", "d. maturity age"],
        correct: "c. rotation age"
    },
    {
        question: "A site was clear-cut. Which of these methods of regeneration cannot be used in a short time-frame?",
        options: [
            "a. natural regeneration",
            "b. artificial regeneration by direct sowing",
            "c. artificial regeneration by planting seedlings",
            "d. artificial regeneration by transplanting trees"
        ],
        correct: "a. natural regeneration"
    },
    {
        question: "Which of these is not a feature of natural regeneration",
        options: [
            "a. low cost",
            "b. less requirement of heavy machinery and labour",
            "c. preservation of genetic variability",
            "d. good control over genetic improvement"
        ],
        correct: "d. good control over genetic improvement"
    },
    {
        question: "Which of these is not a feature of natural regeneration",
        options: [
            "a. seed consumption by insects and seed feeders",
            "b. little control over spacing and stand density",
            "c. long time needed to regenerate forest",
            "d. high requirement of heavy machinery and labour"
        ],
        correct: "d. high requirement of heavy machinery and labour"
    },
    // Assignment 8
    {
        question: "Shelterwood system results in",
        options: [
            "a. even aged stand with natural aesthetics",
            "b. even aged stand with artificial aesthetics",
            "c. uneven aged stand with natural aesthetics",
            "d. uneven aged stand with artificial aesthetics"
        ],
        correct: "a. even aged stand with natural aesthetics"
    },
    {
        question: "In group shelterwood system, the regeneration area is increased",
        options: [
            "a. centrifugally around gaps",
            "b. centripetally around gaps",
            "c. parallel to gaps",
            "d. perpendicular to gaps"
        ],
        correct: "a. centrifugally around gaps"
    },
    {
        question: "Trees not putting increment are removed during",
        options: ["a. preparatory felling", "b. seeding felling", "c. secondary felling", "d. final felling"],
        correct: "a. preparatory felling"
    },
    {
        question: "Clear felling system is not used for",
        options: ["a. light demanding species", "b. shade bearer species", "c. plain areas", "d. plateau areas"],
        correct: "b. shade bearer species"
    },
    {
        question: "For a crop with rotation age of 120 years, PB-III would have crop age",
        options: ["a. 0-30 years", "b. 30-60 years", "c. 60-90 years", "d. 90-120 years"],
        correct: "c. 60-90 years"
    },
    {
        question: "Felling made with the object of opening the canopy to remove shelter and allow more light for the regenerated crop is",
        options: ["a. preparatory felling", "b. seeding felling", "c. secondary felling", "d. final felling"],
        correct: "c. secondary felling"
    },
    {
        question: "Close to nature forestry is a feature of",
        options: ["a. clear felling system", "b. selection system", "c. uniform shelterwood system", "d. group shelterwood system"],
        correct: "b. selection system"
    },
    {
        question: "Inverse-J shaped number-diameter curves are seen in",
        options: ["a. clear felling system", "b. selection system", "c. uniform shelterwood system", "d. group shelterwood system"],
        correct: "b. selection system"
    },
    {
        question: "Which of these is the correct sequence for shelterwood system?",
        options: [
            "a. Preparatory felling → Secondary felling → Seeding felling → Final felling",
            "b. Preparatory felling → Seeding felling → Secondary felling → Final felling",
            "c. Seeding felling → Preparatory felling → Secondary felling → Final felling",
            "d. Final felling → Seeding felling → Secondary felling → Preparatory felling"
        ],
        correct: "b. Preparatory felling → Seeding felling → Secondary felling → Final felling"
    },
    {
        question: "Catchment areas are best suited for",
        options: ["a. clear felling system", "b. selection system", "c. uniform shelterwood system", "d. group shelterwood system"],
        correct: "b. selection system"
    },
    // Assignment 9
    {
        question: "Trees to be retained are shown in marking colour",
        options: ["a. yellow", "b. blue", "c. red", "d. white"],
        correct: "b. blue"
    },
    {
        question: "Trees on boundary are shown in marking colour",
        options: ["a. yellow", "b. blue", "c. red", "d. white"],
        correct: "c. red"
    },
    {
        question: "Cutting of timber into logs is known as",
        options: ["a. marking", "b. bucking", "c. skidding", "d. delimbing"],
        correct: "b. bucking"
    },
    {
        question: "Careful selection of trees for harvesting based on a forest management prescription is known as",
        options: ["a. surveying", "b. cruising", "c. marking", "d. logging"],
        correct: "c. marking"
    },
    {
        question: "Net growth in initial volume is given by",
        options: ["a. V2 - V1", "b. V2 - V1 + H - I", "c. V2 - V1 + H - I + M", "d. V2 - V1 + H - I - M"],
        correct: "b. V2 - V1 + H - I"
    },
    {
        question: "Research plots are shown in marking colour",
        options: ["a. yellow", "b. blue", "c. red", "d. white"],
        correct: "a. yellow"
    },
    {
        question: "Which of these gives the greatest accuracy in constructing face cuts",
        options: ["a. conventional face", "b. humboldt face", "c. open face", "d. all of these"],
        correct: "c. open face"
    },
    {
        question: "Which of these gives the greatest saving of lumber",
        options: ["a. conventional face", "b. humboldt face", "c. open face", "d. all of these"],
        correct: "b. humboldt face"
    },
    {
        question: "Moving of logs from forest to landing area is known as",
        options: ["a. marking", "b. bucking", "c. skidding", "d. delimbing"],
        correct: "c. skidding"
    },
    {
        question: "Surveying timberlands to locate and estimate the volumes and grades of standing timber meeting requirements is known as",
        options: ["a. surveying", "b. cruising", "c. marking", "d. logging"],
        correct: "b. cruising"
    },
    // Assignment 10
    {
        question: "Wet and dry treatment of seeds is used for which species",
        options: ["a. amla", "b. mango", "c. ber", "d. teak"],
        correct: "d. teak"
    },
    {
        question: "Which of these is not a laboratory method to determine best days for seed collection?",
        options: ["a. maximum dry weight", "b. colour of fruits", "c. moisture content of fruits", "d. chemical analysis of fat and nitrogen content"],
        correct: "b. colour of fruits"
    },
    {
        question: "Which of these characterises a refractory site",
        options: ["a. soil depth <10 cm", "b. soil depth 10-30 cm", "c. soil depth >30 cm", "d. none of these"],
        correct: "a. soil depth <10 cm"
    },
    {
        question: "Which of these prevents water logging",
        options: ["a. sunken bed", "b. raised bed", "c. flat bed", "d. all of these"],
        correct: "b. raised bed"
    },
    {
        question: "Number of seeds in sample that germinate up to the peak germination period expressed as % is a definition of",
        options: ["a. germination number", "b. germination percentage", "c. germination energy", "d. germination power"],
        correct: "c. germination energy"
    },
    {
        question: "Which of these conserves moisture",
        options: ["a. sunken bed", "b. raised bed", "c. flat bed", "d. all of these"],
        correct: "a. sunken bed"
    },
    {
        question: "Agave is used for",
        options: ["a. barbed wire fencing", "b. live fencing", "c. chain link fencing", "d. stone wall fencing"],
        correct: "b. live fencing"
    },
    {
        question: "Shell cracking of seeds is used for which species",
        options: ["a. amla", "b. mango", "c. ber", "d. teak"],
        correct: "c. ber"
    },
    {
        question: "Choice of spacing is dependent upon",
        options: ["a. objective of plantation", "b. site-species matching", "c. growth rate", "d. all of these"],
        correct: "d. all of these"
    },
    {
        question: "Which of these is a good storage condition",
        options: [
            "a. high moisture, high temperature",
            "b. high moisture, low temperature",
            "c. low moisture, high temperature",
            "d. low moisture, low temperature"
        ],
        correct: "d. low moisture, low temperature"
    },
    // Assignment 11
    {
        question: "Planting along canal banks is a part of",
        options: ["a. farm forestry", "b. community forestry", "c. extension forestry", "d. agroforestry"],
        correct: "c. extension forestry"
    },
    {
        question: "Captive breeding is an example of",
        options: ["a. in-situ conservation", "b. ex-situ conservation", "c. in-situ preservation", "d. ex-situ preservation"],
        correct: "b. ex-situ conservation"
    },
    {
        question: "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as",
        options: ["a. umbrella species", "b. keystone species", "c. flagship species", "d. all of the above"],
        correct: "d. all of the above"
    },
    {
        question: "Sustainable harvest of resources falls under the category of:",
        options: ["a. conservation", "b. preservation", "c. environmentalism", "d. none of the above"],
        correct: "a. conservation"
    },
    {
        question: "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destructive feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as",
        options: ["a. umbrella species", "b. keystone species", "c. flagship species", "d. all of the above"],
        correct: "d. all of the above"
    },
    {
        question: "People come to Sessa orchid sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as",
        options: ["a. umbrella species", "b. keystone species", "c. flagship species", "d. extinct species"],
        correct: "c. flagship species"
    },
    {
        question: "We prefer those areas for the creation of a conservation reserve where the level of threat is",
        options: ["a. very high", "b. medium", "c. very low", "d. non-existent"],
        correct: "c. very low"
    },
    {
        question: "Which of these is not a forest classification as per the 1894 Forest Policy:",
        options: ["a. protection forest", "b. production forest", "c. minor forest", "d. major forest"],
        correct: "d. major forest"
    },
    {
        question: '"Science of relationships between organisms and their environments" is the definition of:',
        options: ["a. conservation", "b. preservation", "c. environmentalism", "d. ecology"],
        correct: "d. ecology"
    },
    {
        question: "In 1931, Van Panchayats were constituted in areas that are now in",
        options: ["a. Tamil Nadu", "b. Madhya Pradesh", "c. West Bengal", "d. Uttarakhand"],
        correct: "d. Uttarakhand"
    },
    // Assignment 12
    {
        question: "The term laterite soil is derived from Latin later which means",
        options: ["a. red", "b. brick", "c. fertile", "d. infertile"],
        correct: "b. brick"
    },
    {
        question: "Zoo is an example of",
        options: ["a. in-situ conservation", "b. ex-situ conservation", "c. in-situ preservation", "d. ex-situ preservation"],
        correct: "b. ex-situ conservation"
    },
    {
        question: "The breast height for Japan and Korea is",
        options: ["a. 1.1 m", "b. 1.2 m", "c. 1.3 m", "d. 1.4 m"],
        correct: "c. 1.3 m"
    },
    {
        question: "The art and science of cultivating forest crops is called",
        options: ["a. foresticulture", "b. monoculture", "c. silviculture", "d. silvics"],
        correct: "c. silviculture"
    },
    {
        question: "A tree has dbh of 35 cm. Find its basal area in sq m.",
        options: ["a. 0.049", "b. 0.096", "c. 0.149", "d. 0.195"],
        correct: "b. 0.096"
    },
    {
        question: "Self ploughing character is seen in",
        options: ["a. black cotton soil", "b. alluvial soil", "c. saline soil", "d. red and yellow soil"],
        correct: "a. black cotton soil"
    },
    {
        question: "Vertical arrangement of soil horizons is called",
        options: ["a. soil texture", "b. soil structure", "c. soil profile", "d. soil science"],
        correct: "c. soil profile"
    },
    {
        question: "In a triangle, the angle between base and hypotenuse, θ=60° and the hypotenuse c=4 cm. Find the length of the base b.",
        options: ["a. 0.66", "b. 1", "c. 1.5", "d. 2"],
        correct: "d. 2"
    },
    {
        question: '"Allowing some places and some creatures to exist without significant human interference" is a definition of',
        options: ["a. conservation", "b. preservation", "c. environmentalism", "d. all of these"],
        correct: "b. preservation"
    },
    {
        question: "Montane sub-tropical forests do not include",
        options: ["a. broadleaved forests", "b. pine forests", "c. semi-evergreen forests", "d. dry evergreen forests"],
        correct: "d. dry evergreen forests"
    }
];

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = [];
let shuffledQuestions = [];

// DOM elements
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const quizEl = document.getElementById('quiz');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const wrongAnswersEl = document.getElementById('wrong-answers');

// Shuffle array function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start quiz
function startQuiz() {
    shuffledQuestions = shuffle([...questions]);
    currentQuestionIndex = 0;
    score = 0;
    wrongAnswers = [];
    quizEl.style.display = 'block';
    resultEl.style.display = 'none';
    loadQuestion();
}

// Load question
function loadQuestion() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = '';
    feedbackEl.textContent = '';

    currentQuestion.options.forEach(option => {
        const optionEl = document.createElement('div');
        optionEl.classList.add('option');
        optionEl.textContent = option;
        optionEl.addEventListener('click', () => handleAnswer(option, currentQuestion.correct));
        optionsEl.appendChild(optionEl);
    });
}

// Handle answer selection
function handleAnswer(selected, correct) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const optionEls = optionsEl.getElementsByClassName('option');

    // Disable further clicks
    for (let optionEl of optionEls) {
        optionEl.style.pointerEvents = 'none';
        if (optionEl.textContent === correct) {
            optionEl.classList.add('correct');
        }
    }

    // Check if answer is correct
    if (selected === correct) {
        feedbackEl.textContent = 'Correct!';
        feedbackEl.style.color = 'green';
        score++;
    } else {
        const selectedEl = Array.from(optionEls).find(el => el.textContent === selected);
        selectedEl.classList.add('wrong');
        feedbackEl.textContent = `Wrong! The correct answer is: ${correct}`;
        feedbackEl.style.color = 'red';
        wrongAnswers.push({
            question: currentQuestion.question,
            selected: selected,
            correct: correct
        });
    }

    // Move to next question after a delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

// Show results
function showResults() {
    quizEl.style.display = 'none';
    resultEl.style.display = 'block';
    scoreEl.textContent = `Your score: ${score} out of ${shuffledQuestions.length} (${((score / shuffledQuestions.length) * 100).toFixed(2)}%)`;

    wrongAnswersEl.innerHTML = '';
    if (wrongAnswers.length === 0) {
        wrongAnswersEl.textContent = 'No wrong answers!';
    } else {
        wrongAnswers.forEach((wrong, index) => {
            const wrongEl = document.createElement('div');
            wrongEl.innerHTML = `<strong>Question ${index + 1}:</strong> ${wrong.question}<br>
                                 <strong>Your Answer:</strong> ${wrong.selected}<br>
                                 <strong>Correct Answer:</strong> ${wrong.correct}`;
            wrongAnswersEl.appendChild(wrongEl);
        });
    }
}

// Restart quiz
function restartQuiz() {
    startQuiz();
}

// Initialize quiz
startQuiz();
