import Foundation
import Vision
import ImageIO

let root = "/Users/administrador/.codex/workspaces/curva-portadas-publicacion-2026-09-19"
let input = URL(fileURLWithPath: root + "/referencias/portadas/comparacion-2026-09-21/Catalogo-completo.json")
let json = try JSONSerialization.jsonObject(with: Data(contentsOf: input)) as! [String:Any]
let collection = CommandLine.arguments.count > 2 ? CommandLine.arguments[2] : "headway"
var entries = json[collection] as! [[String:Any]]
if collection == "headway" { entries.append(["titulo":"CURVA · Pensamiento positivo, ojo cerrado", "archivo":"./assets/comparacion-propuestas/pensamiento-positivo-ojo-sencillo-aa4587ba25.png", "crop":[0,0,1024,1536]]) }
var output = [[String:Any]]()
for (index,item) in entries.enumerated() {
  let path = root + "/docs/" + (item["archivo"] as! String).replacingOccurrences(of:"./",with:"")
  let source = CGImageSourceCreateWithURL(URL(fileURLWithPath:path) as CFURL,nil)!
  let original = CGImageSourceCreateImageAtIndex(source,0,nil)!
  let crop = item["crop"] as! [Int]
  let image = original.cropping(to:CGRect(x:crop[0],y:crop[1],width:crop[2],height:crop[3]))!
  let request = VNRecognizeTextRequest()
  request.recognitionLevel = .accurate
  request.recognitionLanguages = ["es-ES","en-US"]
  request.usesLanguageCorrection = true
  request.minimumTextHeight = 0.012
  try VNImageRequestHandler(cgImage:image,options:[:]).perform([request])
  let lines = (request.results ?? []).compactMap { observation -> [String:Any]? in
    guard let top = observation.topCandidates(1).first else {return nil}
    let b=observation.boundingBox
    return ["texto":top.string,"confianza":top.confidence,"caja":[b.minX*100,(1-b.maxY)*100,b.width*100,b.height*100]]
  }
  output.append(["titulo":item["titulo"]!,"archivo":item["archivo"]!,"crop":crop,"lineas":lines])
  if index % 20 == 0 {fputs("OCR \(index+1)/\(entries.count)\n",stderr)}
}
let data = try JSONSerialization.data(withJSONObject:output,options:[.prettyPrinted,.sortedKeys,.withoutEscapingSlashes])
try data.write(to:URL(fileURLWithPath:CommandLine.arguments[1]))
print("OCR terminado: \(output.count) cubiertas")
