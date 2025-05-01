

const datasets = [
    {
        name: "CovKG",
        description: "CovKG is a semantically enriched Covid-19 Knowledge Graph derived from 20 diverse data sources, enabling multidimensional analysis across time, location, health, and socioeconomic factors. It supports OLAP queries using QB and QB4OLAP vocabularies and outperforms other datasets by answering 100% of competency queries.",
        link: "https://bike-csecu.com/datasets/CovKG/",
        tags: [
            { name: "TBox", url: "https://bike-csecu.com/datasets/CovKG/cdw.ttl" },
            { name: "Query", url: "https://bike-csecu.com/datasets/CovKG/query/" },
            { name: "Publication", url:"https://doi.org/10.1016/j.jjimei.2025.100325"}
        ]
    },
    {
        name: "Bangladesh Agricultural Knowledge Graph (BDAKG)",
        description: "BDAKG is a semantically enriched knowledge graph that integrates Bangladesh's agricultural data across multiple dimensions, ensuring OLAP compatibility and adherence to FAIR principles. It enables interactive, data-driven analysis to support sustainable agriculture, economic growth, and environmental strategies.",
        link: "https://bike-csecu.com/datasets/agri",
        tags: [
            { name: "TBox", url: "https://bike-csecu.com/datasets/agri/tbox/" },
            { name: "ABox", url: "https://bike-csecu.com/datasets/agri/abox/" },
            { name: "Query", url: "https://bike-csecu.com/datasets/agri/query/"}
        ]
    }
];

const container = document.getElementById("datasetList");

datasets.forEach(dataset => {
    const box = document.createElement("div");
    box.className = "bg-white/60 backdrop-blur-[3px] text-black rounded-xl shadow-lg p-6 hover:shadow-2xl transition cursor-pointer border border-white/20";
    box.onclick = () => window.open(dataset.link, "_blank");

    const title = document.createElement("h3");
    title.className = "text-xl font-semibold mb-2";
    title.style.color = "#0c2461"; // Ensures visibility in front of dark particles
    title.textContent = dataset.name;

    const desc = document.createElement("p");
    desc.className = "mb-4 text-sm text-black";
    desc.textContent = dataset.description;

    const tags = document.createElement("div");
    tags.className = "flex flex-wrap gap-2";
    dataset.tags.forEach(tag => {
        const tagBtn = document.createElement("a");
        tagBtn.className = "bg-[#0c2461] text-white text-xs px-3 py-1 rounded-full hover:bg-[#102772] transition";
        tagBtn.href = tag.url;
        tagBtn.textContent = tag.name;
        tagBtn.onclick = (e) => e.stopPropagation(); // Prevent redirecting to box URL
        tagBtn.target = "_blank";
        tags.appendChild(tagBtn);
    });

    box.appendChild(title);
    box.appendChild(desc);
    box.appendChild(tags);
    container.appendChild(box);
});

