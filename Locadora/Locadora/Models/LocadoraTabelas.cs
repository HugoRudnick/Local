using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;

namespace Locadora.Modelos
{

    public class Usuarios
    {

        [Key]
        public int IdUsuario { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Usuario { get; set; }

        [Column(TypeName = "nvarchar(150)")]
        public string Senha { get; set; }

    }

    public class Generos
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Nome { get; set; }

        [Column(TypeName = "date")]
        public DateTime DataCriacao { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Ativo { get; set; }

    }

    public class Filmes
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Nome { get; set; }

        [Column(TypeName = "date")]
        public DateTime DataCriacao { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public String Ativo { get; set; }

        [Column(TypeName = "int")]
        public int generoId { get; set; }
        
        public Generos genero { get; set; }

            //    using (SqlConnection connection = new SqlConnection(
            //   "Server = (local)\\sqlexpress; Database = LocadoraDB; Trusted_Connection = True; MultipleActiveResultSets = True;"))
            //    {
            //        SqlCommand command = new SqlCommand("select id,Nome,DataCriacao,Ativo from generos where id = " + IdGenero, connection);
            //        command.Connection.Open();
            //        SqlDataReader reader = command.ExecuteReader();



            //        //genero.Id = reader[0];
            //        genero.Nome = reader.ToString ;
            //    }

                

            //}

                //using (SqlConnection conexao = new SqlConnection("Server =(local)\\sqlexpress; Database=LocadoraDB; Trusted_Connection=True; MultipleActiveResultSets=True;")
                //{

                //SqlCommand command = new SqlCommand("", "");
                //command.Connection.Open();
                //command.ExecuteNonQuery();

                //dados = conexao. .Query<dynamic>(
                //        "SELECT R.IdRegiao, " +
                //               "R.NomeRegiao, " +
                //               "E.SiglaEstado AS Estados_SiglaEstado, " +
                //               "E.NomeEstado AS Estados_NomeEstado, " +
                //               "E.NomeCapital AS Estados_NomeCapital " +
                //        "FROM dbo.Regioes R " +
                //        "INNER JOIN dbo.Estados E " +
                //            "ON E.IdRegiao = R.IdRegiao " +
                //        "ORDER BY R.NomeRegiao, E.NomeEstado");

                //    AutoMapper.Configuration.AddIdentifier(
                //                    typeof(Regiao), "IdRegiao");
                //    AutoMapper.Configuration.AddIdentifier(
                //        typeof(Estado), "SiglaEstado");

                //    List<Regiao> regioes = (AutoMapper.MapDynamic<Regiao>(dados)
                //        as IEnumerable<Regiao>).ToList();

                //    return regioes;
                //}
        //        public virtual String DescGenero
        //{
        //    get
        //    {
        //        if (genero is null)
        //        {


        //            using (SqlConnection conexao = new SqlConnection(

        //                    return " ";
        //        }
        //        return genero.Nome;
        //    }
        //}



    }
          

    
    public class Locacoes
    {

        [Key]
        public int Id { get; set; }

        //[Column(TypeName = "int")]
        //public int IdFilme { get; set; }

        [Column(TypeName = "int")]
        public int FilmeId { get; set; }

        public Filmes Filme { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public String Cpf { get; set; }

        [Column(TypeName = "date")]
        public DateTime DataLocacao { get; set; }

    }

}
