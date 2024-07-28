#!/bin/bash

APP_JSON_PATH="./app.json"

increment_build_number() {
  CURRENT_BUILD_NUMBER=$(jq -r '.expo.ios.buildNumber' $APP_JSON_PATH)
  CURRENT_BUILD_NUMBER_INT=$((10#$CURRENT_BUILD_NUMBER))
  NEW_BUILD_NUMBER=$((CURRENT_BUILD_NUMBER_INT + 1))

  jq ".expo.ios.buildNumber = \"$NEW_BUILD_NUMBER\"" $APP_JSON_PATH > tmp.$$.json && mv tmp.$$.json $APP_JSON_PATH
  echo "Build number incremented to: $NEW_BUILD_NUMBER"
}

build_app() {
  echo "Starting build..."
  eas build --platform ios --profile production
}

submit_app() {
  echo "Submitting build..."
  eas submit --platform ios
}

increment_build_number
build_app
submit_app
