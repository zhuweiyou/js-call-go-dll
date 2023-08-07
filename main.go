package main

/*
#include <stdlib.h>

typedef void (*Callback)(char *response);
void callCallback(Callback callback, char *response);
*/
import "C"
import (
	"strings"
	"unsafe"
)

//export Call
func Call(req *C.char, cb C.Callback) {
	reqString := C.GoString(req)
	resString := C.CString(Handler(reqString))
	defer C.free(unsafe.Pointer(resString))
	C.callCallback(cb, resString)
}

func Handler(reqString string) string {
	if strings.ToUpper(reqString) == "PING" {
		return "PONG"
	}
	return "ERROR"
}

func main() {
}
