module.exports = remoteAddressParser;

function remoteAddressParser(req, res, next) {
    var address = req.connection.remoteAddress;
    var re = RegExp("([0-9]{1,3}.){0,3}[0-9]{1,3}");
    var rRes = re.exec(address);
    req.connection.remoteAddressIpv4 = rRes[0];
    next();
}