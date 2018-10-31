FROM golang

RUN go get -u github.com/golang/dep/cmd/dep
RUN go get github.com/osrg/gobgp; exit 0
RUN cd $GOPATH/src/github.com/osrg/gobgp && dep ensure
RUN cd $GOPATH/src/github.com/osrg/gobgp/cmd && go install ./...

COPY gobgpd.conf /var/tmp

CMD $GOPATH/bin/gobgpd -f /var/tmp/gobgpd.conf --api-hosts=:9090
