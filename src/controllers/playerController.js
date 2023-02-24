const controller = {};

controller.list = (req, res)=>{
	req.getConnection((err, conn) =>{
		conn.query('SELECT * FROM players', (err, players) =>{
			if(err){
				res.json(err);
			}
			res.render('players', {
				data: players
			});
		});
	});
};

controller.save = (req, res) =>{
	const data = req.body;
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO players set ?', [data], (err, players) =>{
			res.redirect('/');

		});
	});
};

controller.edit = (req, res) =>{
	const { ID } = req.params;
	req.getConnection((err, conn) =>{
		conn.query('SELECT * FROM players WHERE ID = ?',[ID], (err, players)=>{
			res.render('player_edit',{
				data:players[0]
			});
		});
	});

};

controller.update = (req, res) =>{
	const {ID} = req.params;
	const newPlayer = req.body;
	req.getConnection((err, conn) =>{
		conn.query('UPDATE players set ? WHERE ID = ?', [newPlayer, ID], (err, rows) => {
			res.redirect('/');
		});
	});
};

controller.delete = (req, res) =>{
	const { ID } = req.params;
	req.getConnection((err, conn) =>{
		conn.query('DELETE FROM players WHERE ID = ?', [ID], (err, rows) =>{
			res.redirect('/');
		});
	});
};

module.exports = controller;