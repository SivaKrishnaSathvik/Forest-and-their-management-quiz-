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
        question: "Moving of logs from forest to landin