﻿// <auto-generated />
using System;
using Locadora.Modelos;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Locadora.Migrations
{
    [DbContext(typeof(LocadoraDBContext))]
    partial class LocadoraDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Locadora.Modelos.Filmes", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Ativo")
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime>("DataCriacao")
                        .HasColumnType("date");

                    b.Property<string>("Nome")
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("generoId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("generoId");

                    b.ToTable("Filmes");
                });

            modelBuilder.Entity("Locadora.Modelos.Generos", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Ativo")
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime>("DataCriacao")
                        .HasColumnType("date");

                    b.Property<string>("Nome")
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("generos");
                });

            modelBuilder.Entity("Locadora.Modelos.Locacoes", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Cpf")
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime>("DataLocacao")
                        .HasColumnType("date");

                    b.Property<int>("FilmeId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("FilmeId");

                    b.ToTable("Locacoes");
                });

            modelBuilder.Entity("Locadora.Modelos.Usuarios", b =>
                {
                    b.Property<int>("IdUsuario")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Senha")
                        .HasColumnType("nvarchar(150)");

                    b.Property<string>("Usuario")
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("IdUsuario");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("Locadora.Modelos.Filmes", b =>
                {
                    b.HasOne("Locadora.Modelos.Generos", "genero")
                        .WithMany()
                        .HasForeignKey("generoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Locadora.Modelos.Locacoes", b =>
                {
                    b.HasOne("Locadora.Modelos.Filmes", "Filme")
                        .WithMany()
                        .HasForeignKey("FilmeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
