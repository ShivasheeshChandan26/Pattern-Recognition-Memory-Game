#include <FastLED.h>
#include <Keypad.h>

//GLOBAL VARIABLES
#define DATA_PIN 7  //LED pin
#define LED_TYPE NEOPIXEL  //type of LED
#define NUM_LEDS 16  //number of LEDs in series

CRGBArray<NUM_LEDS> leds;  //Defining CRGBSET to be entire string, and calling it leds

const byte ROWS = 4; //four rows
const byte COLS = 4; //four columns

//mapping the push buttons into a keypad
char hexaKeys[ROWS][COLS] = {
  {'A', 'B', 'C', 'D'},
  {'E', 'F', 'G', 'H'},
  {'I', 'J', 'K', 'L'},
  {'M', 'N', 'O', 'P'}
};

byte rowPins[ROWS] = {A0,A1,A2,A3}; //connect to the row pinouts of the keypad
byte colPins[COLS] = {A4,A5,2,3}; //connect to the column pinouts of the keypad
Keypad customKeypad = Keypad(makeKeymap(hexaKeys), rowPins, colPins, ROWS, COLS);

// signals received from python
int Signal_3boxes[3] = {6, 10, 15};
int Signal_5boxes[5] = {0, 1, 2, 3, 4};
int Signal_7boxes[7] = {0, 1, 2, 3, 4, 5, 6};
int Signal_10boxes[10] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

// sequence of buttons pressed by the user
int Users3Boxes[3] = {0};
int Users5Boxes[5] = {0};
int Users7Boxes[7] = {0};
int Users10Boxes[10] = {0};

int key;
int count = 0;
int arrayIndex = 0;

void setup() {
  Serial.begin(9600);
  delay(2000); //for safe startup
  FastLED.addLeds<LED_TYPE, DATA_PIN>(leds, NUM_LEDS);

    // rainbow gradient intro
    static uint8_t hue=0; 
    for(int i = 0; i < 2; i++) {
      for(hue = 0; hue <= 255; hue++) {
        leds.fill_rainbow(hue);
        if(hue==255) break;
        FastLED.delay(5); //speed of changing
      }
    }

    FastLED.clear(true);
}

void loop() {
  // 1st level
  //
  //
  key = customKeypad.getKey() - 65;
  leds[key].setRGB(0, 0, 255);
  FastLED.show();
  
  if(key != -65) {
    Users3Boxes[arrayIndex] = key;

    if(Users3Boxes[arrayIndex] == Signal_3boxes[arrayIndex]) {
      count++;
    }
    
    arrayIndex++;
  }
  
  if(count == 3 && arrayIndex == 3) {
    delay(1000);
    FastLED.clear(true);

    for(int j = 0; j < 3; j++) {
      for (int i = 0; i < NUM_LEDS; i++) {
        leds[i] = CRGB::Green;
      }
      FastLED.show();
      delay(1000);

      for (int i = 0; i < NUM_LEDS; i++) {
        leds[i] = CRGB::Black;
      }
      FastLED.show();
      delay(500);
    }
    // 2nd level
    //
    //
    arrayIndex = 10;
    count = 10;

    key = customKeypad.getKey() - 65;
      leds[key].setRGB(0, 255, 255);
      FastLED.show();
      
      if(key != -65) {
        Users5Boxes[arrayIndex-10] = key;

        if(Users5Boxes[arrayIndex-10] == Signal_5boxes[arrayIndex-10]) {
          count++;
        }
        
        arrayIndex++;
      }
      
      if(count == 15 && arrayIndex == 15) {
        delay(1000);
        FastLED.clear(true);

        for(int j = 0; j < 3; j++) {
          for (int i = 0; i < NUM_LEDS; i++) {
            leds[i] = CRGB::Green;
          }
          FastLED.show();
          delay(1000);

          for (int i = 0; i < NUM_LEDS; i++) {
            leds[i] = CRGB::Black;
          }
          FastLED.show();
          delay(500);
        }

        //
        //
        //

        //3rd Level
        arrayIndex = 0;
        count = 0;
        key = customKeypad.getKey() - 65;
          leds[key].setRGB(255, 0, 255);
          FastLED.show();

          if(key != -65) {
            Users7Boxes[arrayIndex] = key;

            if(Users7Boxes[arrayIndex] == Signal_7boxes[arrayIndex]) {
              count++;
            }

            arrayIndex++;
          }

          if(count == 7 && arrayIndex == 7) {
            delay(1000);
            FastLED.clear(true);

            for(int j = 0; j < 3; j++) {
              for (int i = 0; i < NUM_LEDS; i++) {
                leds[i] = CRGB::Green;
              }
              FastLED.show();
              delay(1000);

              for (int i = 0; i < NUM_LEDS; i++) {
                leds[i] = CRGB::Black;
              }
              FastLED.show();
              delay(500);
            }

            //
            //Last Level
            //
            arrayIndex = 0;
            count = 0;
            key = customKeypad.getKey() - 65;
              leds[key].setRGB(0, 0, 255);
              FastLED.show();

              if(key != -65) {
                Users10Boxes[arrayIndex] = key;

                if(Users10Boxes[arrayIndex] == Signal_10boxes[arrayIndex]) {
                  count++;
                }

                arrayIndex++;
              }

              if(count == 10 && arrayIndex == 10) {
                delay(1000);
                FastLED.clear(true);

                for(int j = 0; j < 3; j++) {
                  for (int i = 0; i < NUM_LEDS; i++) {
                    leds[i] = CRGB::Green;
                  }
                  FastLED.show();
                  delay(1000);

                  for (int i = 0; i < NUM_LEDS; i++) {
                    leds[i] = CRGB::Black;
                  }
                  FastLED.show();
                  delay(500);
                }

                Serial.println("You won the game!");
                Serial.println("SCORE : 400 points");

              }
              else if (count != 3 && arrayIndex == 3) {
                delay(1000);

                // blinking red 3 times
                for(int j = 0; j < 3; j++) {
                  for (int i = 0; i < NUM_LEDS; i++) {
                    leds[i] = CRGB::Red;
                  }
                  FastLED.show();
                  delay(1000);

                  for (int i = 0; i < NUM_LEDS; i++) {
                    leds[i] = CRGB::Black;
                  }
                  FastLED.show();
                  delay(500);
                }

                //gameOver();
                Serial.println("Game Over!");
                Serial.println("Score: 300");

              }
              else {}
            //
            //
            //

          }
          else if (count != 3 && arrayIndex == 3) {
            delay(1000);

            // blinking red 3 times
            for(int j = 0; j < 3; j++) {
              for (int i = 0; i < NUM_LEDS; i++) {
                leds[i] = CRGB::Red;
              }
              FastLED.show();
              delay(1000);

              for (int i = 0; i < NUM_LEDS; i++) {
                leds[i] = CRGB::Black;
              }
              FastLED.show();
              delay(500);
            }

            //gameOver();
            Serial.println("Game Over!");
            Serial.println("Score: 200");

          }
          else {}

        //
        //
        //

          }
      else if (count != 5 && arrayIndex == 5) {
        delay(1000);

        // blinking red 3 times
        for(int j = 0; j < 3; j++) {
          for (int i = 0; i < NUM_LEDS; i++) {
            leds[i] = CRGB::Red;
          }
          FastLED.show();
          delay(1000);

          for (int i = 0; i < NUM_LEDS; i++) {
            leds[i] = CRGB::Black;
          }
          FastLED.show();
          delay(500);
        }
        
        //gameOver();
        Serial.println("Game Over!");
        Serial.println("Score: 100");

      }
      else {}

  }

  //
  //
  //
  else if (count != 3 && arrayIndex == 3) {
    delay(1000);

    // blinking red 3 times
    for(int j = 0; j < 3; j++) {
      for (int i = 0; i < NUM_LEDS; i++) {
        leds[i] = CRGB::Red;
      }
      FastLED.show();
      delay(1000);

      for (int i = 0; i < NUM_LEDS; i++) {
        leds[i] = CRGB::Black;
      }
      FastLED.show();
      delay(500);
    }
    
    //gameOver();
    Serial.println("Game Over!");
    Serial.println("Score: 0");

  }
  else {}
}