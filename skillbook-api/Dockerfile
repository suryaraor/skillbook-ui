FROM openjdk:8

VOLUME /tmp

ADD /target/skillbook-0.0.1-SNAPSHOT.jar /app.jar

# Expose ports.
EXPOSE 8080 80 443

ENTRYPOINT exec java -Djava.security.egd=file:/dev/./urandom \
                     -Dserver.port=8080 \
                     -Denvironment=$env \
                     -jar /app.jar
