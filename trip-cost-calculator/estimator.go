package main
import "fmt"
func main(){
	var airfareCash float32

	fmt.Println("Enter the airfare in USD $")
	fmt.Scan(&airfareCash)
	fmt.Println("Airfare is $", airfareCash)
}