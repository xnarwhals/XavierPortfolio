const baseUrl = import.meta.env.BASE_URL

const DOWNLOADS = [
    {
        id: 1,
        title: "Desktop Fika",
        previewImage: `${baseUrl}Downloads/FikaPet/FikaPet.png`,
        description: "A happy little cat that inspires you to do work and take breaks. You deserve to be happy; have a Fika.",
        type: "Windows App",
        downloadLink: `${baseUrl}Downloads/FikaPet/DesktopFika.zip`,
        appInfo: {
            systemRequirements: "Windows 10 or later",
            version: "1.0.1.0",
            size: "90.25 MB",
            permissions: ["runFullTrust"],
        },
    },
    {
        id: 2,
        title: "Resume",
        previewType: "pdf",
        previewDocument: `${baseUrl}Downloads/Resume/XavierResume.pdf`,
        description: "A PDF version of my resume for your convenience.",
        type: "PDF",
        downloadLink: `${baseUrl}Downloads/Resume/XavierResume.pdf`,
        infoTitle: "Resume",
        poem: [
            "Gentle eyes that see so much,",
            "Paws that have the quiet touch,",
            "Purrs to signal all is well",
            "And show more love than words can tell.",
            "Graceful movements touched with pride,",
            "A calming presence by our side.",
            "A friendship that will last and grow -",
            "Small wonder why we love them so.",
            "- Unknown",
        ],
    },
]

export default DOWNLOADS