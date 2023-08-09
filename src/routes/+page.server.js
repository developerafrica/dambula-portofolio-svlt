/** @type {import('./$types').PageServerLoad} */
import fs from 'fs'
import pkg from 'pdfjs-dist';
const { getDocument } = pkg;

class FileData{
    constructor(title, content, pages, type){
        this.id = title.replace(/\s+/g, "")
        this.uuid = crypto.randomUUID()
        this.title = title.slice(0, -4)
        this.link = title
        this.content = content
        this.pages = pages
        this.type = type
        this.cover = `/cover/${title.slice(0, -3)}svg`
    }
}

async function getitems(file, src){
    const doc = await getDocument(src).promise
    const page = await doc.getPage(1)     
    const content = await page.getTextContent()

    let num = await doc.numPages 

    const items = content.items.map((item)=>{
        return item.str
    })
    return new FileData(file, items, num, "poem")
}

async function extracted(folderPath) {
    try {
        const files = await fs.promises.readdir(folderPath);
        let extractedarray = []
               
            for (const file of files) {
                const filePath = `${folderPath}/${file}`;
                let extractedText = await getitems(file,filePath);
                extractedarray.push(extractedText)                
                            
            }
        return JSON.stringify(extractedarray)


    } catch (error) {
      console.error('Error reading the folder:', error);
    }
  }
 
  export async function load() {
      const folderPath = './static/documents';
     
    
    return {
        body: await extracted(folderPath)
    };
};