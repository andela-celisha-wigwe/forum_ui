curl http://localhost:4444/wd/hub/status

# if [[ "$?" -ne 0 ]]; then
# 	# sleep in bash for about 10 seconds before running night watch.
# 	# selenium -Dwebdriver.chromedriver="./bin/chromedriver" & 
# 	# java -jar ./bin/selenium.jar -Dwebdriver.chrome.driver=./bin/chromedriver & 
# fi

nightwatch -t tests/*