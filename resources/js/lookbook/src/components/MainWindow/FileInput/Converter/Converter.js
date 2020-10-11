import * as file2html from 'file2html';
import TextReader from 'file2html-text';
import OOXMLReader from 'file2html-ooxml';
import ODTReader from 'file2html-odf';
import DSVReader from 'file2html-dsv';
import FictionBookReader from 'file2html-fiction-book';
import EPUBReader from 'file2html-epub';
const FORMATS = [{
  docx: OOXMLReader,
  txt: TextReader,
  fb2: FictionBookReader
}]
class Converter{
  constructor (file, meta, format){
    this._file = file
    this._meta = meta
    this.fileReader = file2html.config({
    readers: [
        FORMATS[format]
    ]
    })
    this.data = null
    this.getAsHTML = this.getAsHTML.bind(this)
    this.convert = this.convert.bind(this)
    this.getContent = this.getContent.bind(this)
    this.getStyles = this.getStyles.bind(this)
  }
  getAsHTML (){
    return this.data.styles + this.data.content
  }
  convert (){
    file2html.read(
    this._file
    ).then((file) => {
      this.data = file.getData()
    })
  }
  getStyles (){
    return this.data.styles
  }
  getContent (){
    return this.data.content
  }

}
export default Converter
