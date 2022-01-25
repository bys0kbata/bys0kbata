FileReader(String fileName) 
FileReader(File file)
FileReader(FileDescriptor fd)


var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
import java.io.*;
 
public class Program {
 
    public static void main(String[] args) {
        
        try(FileReader reader = new FileReader("index.html")
        {
           // читаем посимвольно
            int c;
            while((c=reader.read())!=-1){
                 
                System.out.print((char)c);
            } 
        }
        catch(IOException ex){
             
            System.out.println(ex.getMessage());
        }   
    } 
}
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
