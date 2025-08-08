// #include <string>
// #include <iostream>

// struct Greeter {
  // static void sayCze(
    // std::string name
  // ) ;{
    // std::cout
      // << "Hello, "
      // << name << "!\n";
  // }
// };

#include "nbind/nbind.h"



#include <iostream>

void sayHello() {
  std::cout << "Hello!\n";
}


NBIND_GLOBAL() {
  void sayHello();
}