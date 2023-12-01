
const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index')
};

indexCtrl.renderDocentes = (req, res) => {
    res.render('docentes')
};

module.exports = indexCtrl;