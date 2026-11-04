--
-- PostgreSQL database dump
--

\restrict 4AwcPJdUfyXAvrcAXoOvHf4ExcBfWcGJ0IQw47FlpdSjKR8EjmyJZi1leDyz0Cy

-- Dumped from database version 17.10
-- Dumped by pg_dump version 17.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: f_convnl(numeric); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.f_convnl(num numeric) RETURNS character varying
    LANGUAGE plpgsql
    AS $$
-- Función que devuelve la cadena de texto en castellano que corresponde a un número.
-- Parámetros: número con 2 decimales, máximo 999.999.999,99.

DECLARE	
	d varchar[];
	f varchar[];
	g varchar[];
	numt varchar;
	txt varchar;
	a integer;
	a1 integer;
	a2 integer;
	n integer;
	p integer;
	negativo boolean;
BEGIN
	-- Máximo 999.999.999,99
	if num > 999999999.99 then
		return '---';
	end if;
	txt = '';
	d = array[' un',' dos',' tres',' cuatro',' cinco',' seis',' siete',' ocho',' nueve',' diez',' once',' doce',' trece',' catorce',' quince',
		' dieciseis',' diecisiete',' dieciocho',' diecinueve',' veinte',' veintiun',' veintidos', ' veintitres', ' veinticuatro', ' veinticinco',
		' veintiseis',' veintisiete',' veintiocho',' veintinueve'];
	f = array ['','',' treinta',' cuarenta',' cincuenta',' sesenta',' setenta',' ochenta', ' noventa'];
	g= array [' ciento',' doscientos',' trescientos',' cuatrocientos',' quinientos',' seiscientos',' setecientos',' ochocientos',' novecientos'];
	numt = lpad((num::numeric(12,2))::text,12,'0');
	if strpos(numt,'-') > 0 then
	   negativo = true;
	else
	   negativo = false;
	end if;
	numt = translate(numt,'-','0');
	numt = translate(numt,'.,','');
	-- Trato 4 grupos: millones, miles, unidades y decimales
	p = 1;
	for i in 1..4 loop
		if i < 4 then
			n = substring(numt::text from p for 3);
		else
			n = substring(numt::text from p for 2);
		end if;
		p = p + 3;
		if i = 4 then
			if txt = '' then
				txt = ' cero';
			end if;
			if n > 0 then
			-- Empieza con los decimales
				txt = txt || ' con';
			end if;
		end if;
		-- Centenas 
		if n > 99 then
			a = substring(n::text from 1 for 1);
			a1 = substring(n::text from 2 for 2);
			if a = 1 then
				if a1 = 0 then
					txt = txt || ' cien';
				else
					txt = txt || ' ciento';
				end if;
			else
				txt = txt || g[a];
			end if;
		else
			a1 = n;
		end if;
		-- Decenas
		a = a1;
		if a > 0 then
			if a < 30 then
				if a = 21 and (i = 3 or i = 4) then
					txt = txt || ' veintiuno';
				elsif n = 1 and i = 2 then
					txt = txt; 
				elsif a = 1 and (i = 3 or i = 4)then
					txt = txt || ' uno';
				else
					txt = txt || d[a];
				end if;
			else
				a1 = substring(a::text from 1 for 1);
				a2 = substring(a::text from 2 for 1);
				if a2 = 1 and (i = 3 or i = 4) then
						txt = txt || f[a1] || ' y' || ' uno';
				else
					if a2 <> 0 then
						txt = txt || f[a1] || ' y' || d[a2];
					else
						txt = txt || f[a1];
					end if;
				end if;
			end if;
		end if;
		if n > 0 then
			if i = 1 then
				if n = 1 then
					txt = txt || ' millón';
				else
					txt = txt || ' millones';
				end if;
			elsif i = 2 then
				txt = txt || ' mil';
			end if;		
		end if;
	end loop;
	txt = ltrim(txt);
	if negativo = true then
	   txt= '-' || txt;
	end if;
    RETURN txt;
END;
$$;


--
-- Name: f_convnl2(numeric); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.f_convnl2(num numeric) RETURNS character varying
    LANGUAGE plpgsql
    AS $$
-- Función que devuelve la cadena de texto en castellano que corresponde a un número.
-- Parámetros: número con 2 decimales, máximo 999.999.999,99.

DECLARE	
	d varchar[];
	f varchar[];
	g varchar[];
	numt varchar;
	txt varchar;
	a integer;
	a1 integer;
	a2 integer;
	n integer;
	p integer;
	negativo boolean;
BEGIN
	-- Máximo 999.999.999,99
	if num > 999999999.99 then
		return '---';
	end if;
	txt = '';
	d = array[' un',' dos',' tres',' cuatro',' cinco',' seis',' siete',' ocho',' nueve',' diez',' once',' doce',' trece',' catorce',' quince',
		' dieciseis',' diecisiete',' dieciocho',' diecinueve',' veinte',' veintiun',' veintidos', ' veintitres', ' veinticuatro', ' veinticinco',
		' veintiseis',' veintisiete',' veintiocho',' veintinueve'];
	f = array ['','',' treinta',' cuarenta',' cincuenta',' sesenta',' setenta',' ochenta', ' noventa'];
	g= array [' ciento',' doscientos',' trescientos',' cuatrocientos',' quinientos',' seiscientos',' setecientos',' ochocientos',' novecientos'];
	numt = lpad((num::numeric(12,2))::text,12,'0');
	if strpos(numt,'-') > 0 then
	   negativo = true;
	else
	   negativo = false;
	end if;
	numt = translate(numt,'-','0');
	numt = translate(numt,'.,','');
	-- Trato 4 grupos: millones, miles, unidades y decimales
	p = 1;
	for i in 1..4 loop
		if i < 4 then
			n = substring(numt::text from p for 3);
		else
			n = substring(numt::text from p for 2);
		end if;
		p = p + 3;
		if i = 4 then
			if txt = '' then
				txt = ' cero';
			end if;
			if n > 0 then
			-- Empieza con los decimales
				txt = txt || ' con';
			end if;
		end if;
		-- Centenas 
		if n > 99 then
			a = substring(n::text from 1 for 1);
			a1 = substring(n::text from 2 for 2);
			if a = 1 then
				if a1 = 0 then
					txt = txt || ' cien';
				else
					txt = txt || ' ciento';
				end if;
			else
				txt = txt || g[a];
			end if;
		else
			a1 = n;
		end if;
		-- Decenas
		a = a1;
		if a > 0 then
			if a < 30 then
				if a = 21 and (i = 3 or i = 4) then
					txt = txt || ' veintiuno';
				elsif n = 1 and i = 2 then
					txt = txt; 
				elsif a = 1 and (i = 3 or i = 4)then
					txt = txt || ' uno';
				else
					txt = txt || d[a];
				end if;
			else
				a1 = substring(a::text from 1 for 1);
				a2 = substring(a::text from 2 for 1);
				if a2 = 1 and (i = 3 or i = 4) then
						txt = txt || f[a1] || ' y' || ' uno';
				else
					if a2 <> 0 then
						txt = txt || f[a1] || ' y' || d[a2];
					else
						txt = txt || f[a1];
					end if;
				end if;
			end if;
		end if;
		if n > 0 then
			if i = 1 then
				if n = 1 then
					txt = txt || ' millón';
				else
					txt = txt || ' millones';
				end if;
			elsif i = 2 then
				txt = txt || ' mil';
			end if;		
		end if;
	end loop;
	txt = ltrim(txt);
	if negativo = true then
	   txt= '-' || txt;
	end if;
    RETURN txt;
END;
$$;


--
-- Name: fu_numero_letras(numeric); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.fu_numero_letras(numero numeric) RETURNS text
    LANGUAGE plpgsql
    AS $$
DECLARE
     lnEntero INTEGER;
     lcRetorno TEXT;
     lnTerna INTEGER;
     lcMiles TEXT;
     lcCadena TEXT;
     lnUnidades INTEGER;
     lnDecenas INTEGER;
     lnCentenas INTEGER;
     lnFraccion INTEGER;
     lnSw INTEGER;
BEGIN
     lnEntero := FLOOR(numero)::INTEGER;--Obtenemos la parte Entera
     lnFraccion := FLOOR(((numero - lnEntero) * 100))::INTEGER;--Obtenemos la Fraccion del Monto
     lcRetorno := '';
     lnTerna := 1;
     IF lnEntero > 0 THEN
     lnSw := LENGTH(lnEntero);
     WHILE lnTerna <= lnSw LOOP
        -- Recorro terna por terna
        lcCadena = '';
        lnUnidades = lnEntero % 10;
        lnEntero = CAST(lnEntero/10 AS INTEGER);
        lnDecenas = lnEntero % 10;
        lnEntero = CAST(lnEntero/10 AS INTEGER);
        lnCentenas = lnEntero % 10;
        lnEntero = CAST(lnEntero/10 AS INTEGER);
    -- Analizo las unidades
       SELECT
         CASE /* UNIDADES */
           WHEN lnUnidades = 1 AND lnTerna = 1 THEN 'UNO ' || lcCadena
           WHEN lnUnidades = 1 AND lnTerna <> 1 THEN 'UN ' || lcCadena
           WHEN lnUnidades = 2 THEN 'DOS ' || lcCadena
           WHEN lnUnidades = 3 THEN 'TRES ' || lcCadena
           WHEN lnUnidades = 4 THEN 'CUATRO ' || lcCadena
           WHEN lnUnidades = 5 THEN 'CINCO ' || lcCadena
           WHEN lnUnidades = 6 THEN 'SEIS ' || lcCadena
           WHEN lnUnidades = 7 THEN 'SIETE ' || lcCadena
           WHEN lnUnidades = 8 THEN 'OCHO ' || lcCadena
           WHEN lnUnidades = 9 THEN 'NUEVE ' || lcCadena
           ELSE lcCadena
          END INTO lcCadena;
          /* UNIDADES */
    -- Analizo las decenas
    SELECT
    CASE /* DECENAS */
      WHEN lnDecenas = 1 THEN
        CASE lnUnidades
          WHEN 0 THEN 'DIEZ '
          WHEN 1 THEN 'ONCE '
          WHEN 2 THEN 'DOCE '
          WHEN 3 THEN 'TRECE '
          WHEN 4 THEN 'CATORCE '
          WHEN 5 THEN 'QUINCE '
          ELSE 'DIECI' || lcCadena
        END
      WHEN lnDecenas = 2 AND lnUnidades = 0 THEN 'VEINTE ' || lcCadena
      WHEN lnDecenas = 2 AND lnUnidades <> 0 THEN 'VEINTI' || lcCadena
      WHEN lnDecenas = 3 AND lnUnidades = 0 THEN 'TREINTA ' || lcCadena
      WHEN lnDecenas = 3 AND lnUnidades <> 0 THEN 'TREINTA Y ' || lcCadena
      WHEN lnDecenas = 4 AND lnUnidades = 0 THEN 'CUARENTA ' || lcCadena
      WHEN lnDecenas = 4 AND lnUnidades <> 0 THEN 'CUARENTA Y ' || lcCadena
      WHEN lnDecenas = 5 AND lnUnidades = 0 THEN 'CINCUENTA ' || lcCadena
      WHEN lnDecenas = 5 AND lnUnidades <> 0 THEN 'CINCUENTA Y ' || lcCadena
      WHEN lnDecenas = 6 AND lnUnidades = 0 THEN 'SESENTA ' || lcCadena
      WHEN lnDecenas = 6 AND lnUnidades <> 0 THEN 'SESENTA Y ' || lcCadena
      WHEN lnDecenas = 7 AND lnUnidades = 0 THEN 'SETENTA ' || lcCadena
      WHEN lnDecenas = 7 AND lnUnidades <> 0 THEN 'SETENTA Y ' || lcCadena
      WHEN lnDecenas = 8 AND lnUnidades = 0 THEN 'OCHENTA ' || lcCadena
      WHEN lnDecenas = 8 AND lnUnidades <> 0 THEN 'OCHENTA Y ' || lcCadena
      WHEN lnDecenas = 9 AND lnUnidades = 0 THEN 'NOVENTA ' || lcCadena
      WHEN lnDecenas = 9 AND lnUnidades <> 0 THEN 'NOVENTA Y ' || lcCadena
      ELSE lcCadena
    END INTO lcCadena; /* DECENAS */
    -- Analizo las centenas
    SELECT
    CASE /* CENTENAS */
      WHEN lnCentenas = 1 AND lnUnidades = 0 AND lnDecenas = 0 THEN 'CIEN ' || lcCadena
      WHEN lnCentenas = 1 AND NOT(lnUnidades = 0 AND lnDecenas = 0) THEN 'CIENTO ' || lcCadena
      WHEN lnCentenas = 2 THEN 'DOSCIENTOS ' || lcCadena
      WHEN lnCentenas = 3 THEN 'TRESCIENTOS ' || lcCadena
      WHEN lnCentenas = 4 THEN 'CUATROCIENTOS ' || lcCadena
      WHEN lnCentenas = 5 THEN 'QUINIENTOS ' || lcCadena
      WHEN lnCentenas = 6 THEN 'SEISCIENTOS ' || lcCadena
      WHEN lnCentenas = 7 THEN 'SETECIENTOS ' || lcCadena
      WHEN lnCentenas = 8 THEN 'OCHOCIENTOS ' || lcCadena
      WHEN lnCentenas = 9 THEN 'NOVECIENTOS ' || lcCadena
      ELSE lcCadena
    END INTO lcCadena;/* CENTENAS */
    -- Analizo la terna
    SELECT
    CASE /* TERNA */
      WHEN lnTerna = 1 THEN lcCadena
      WHEN lnTerna = 2 AND (lnUnidades + lnDecenas + lnCentenas <> 0) THEN lcCadena || ' MIL '
      WHEN lnTerna = 3 AND (lnUnidades + lnDecenas + lnCentenas <> 0) AND
        lnUnidades = 1 AND lnDecenas = 0 AND lnCentenas = 0 THEN lcCadena || ' MILLON '
      WHEN lnTerna = 3 AND (lnUnidades + lnDecenas + lnCentenas <> 0) AND
        NOT (lnUnidades = 1 AND lnDecenas = 0 AND lnCentenas = 0) THEN lcCadena || ' MILLONES '
      WHEN lnTerna = 4 AND (lnUnidades + lnDecenas + lnCentenas <> 0) THEN lcCadena || ' MIL MILLONES '
      ELSE ''
    END INTO lcCadena;/* TERNA */

    --Retornamos los Valores Obtenidos
    lcRetorno = lcCadena  || lcRetorno;
    lnTerna = lnTerna + 1;
    END LOOP;
  END IF;
  IF lnTerna = 1 THEN
    lcRetorno := 'CERO';
  END IF;
  lcRetorno := RTRIM(lcRetorno) || ' CON ' || LTRIM(lnFraccion) || '/100 NUEVOS SOLES';
RETURN lcRetorno;
END;
$$;


--
-- Name: sicai_aplicar_recepcion(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.sicai_aplicar_recepcion() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
 UPDATE public.almacen SET existencias=COALESCE(existencias,0)+NEW.cantidad
 WHERE id=(SELECT id_almacen FROM public.compras WHERE id=NEW.id_compra);
 IF NOT FOUND THEN RAISE EXCEPTION 'No existe el almacén de la compra'; END IF;
 RETURN NEW;
END $$;


--
-- Name: sicai_validar_recepcion(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.sicai_validar_recepcion() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE c public.compras%ROWTYPE; recibida numeric; fecha date;
BEGIN
 SELECT * INTO c FROM public.compras WHERE id=NEW.id_compra FOR UPDATE;
 IF NOT FOUND OR NOT c.gestion_recepciones OR c.esactivo IS NOT TRUE THEN
  RAISE EXCEPTION 'Compra no disponible para recepción' USING ERRCODE='P0001';
 END IF;
 SELECT fecha_recepcion INTO fecha FROM public.recepciones_compra WHERE id=NEW.id_recepcion;
 IF fecha < c.fecha_compra THEN
  RAISE EXCEPTION 'La recepción no puede ser anterior a la compra' USING ERRCODE='P0001';
 END IF;
 SELECT COALESCE(SUM(cantidad),0) INTO recibida FROM public.recepciones_compra_detalle WHERE id_compra=c.id;
 IF NEW.cantidad > c.total_articulos-recibida THEN
  RAISE EXCEPTION 'La cantidad supera el pendiente de la compra %', c.id USING ERRCODE='P0001';
 END IF;
 RETURN NEW;
END $$;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: almacen; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.almacen (
    id integer NOT NULL,
    id_centrotrabajo integer,
    id_costos integer,
    existencias numeric,
    fecha_adquisicion date,
    esactivo boolean,
    unidad character varying(20),
    descripcion text,
    id_partida integer,
    nombre_producto character varying,
    id_unidad_medida integer
);


--
-- Name: almacen_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.almacen_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: almacen_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.almacen_id_seq OWNED BY public.almacen.id;


--
-- Name: cat_articulos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cat_articulos (
    id integer NOT NULL,
    clave text,
    id_partidas integer,
    descripcion text,
    limite_max_a numeric,
    limite_max_b numeric,
    limite_max_c numeric,
    unidad_medida character varying(5),
    esactivo boolean,
    esbasico boolean,
    unidad_medida_id integer
);


--
-- Name: cat_articulos.backup; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cat_articulos.backup" (
    id integer NOT NULL,
    clave text,
    id_partidas integer,
    descripcion text,
    limite_max_a numeric,
    limite_max_b numeric,
    limite_max_c numeric,
    unidad_medida character varying(5),
    esactivo boolean,
    esbasico boolean,
    unidad_medida_id integer,
    id_costo integer,
    id_proveedor integer,
    precio_unitario numeric,
    iva numeric,
    precio_total numeric,
    fecha_inicio date,
    costo_esactivo boolean
);


--
-- Name: cat_articulos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cat_articulos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cat_articulos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cat_articulos_id_seq OWNED BY public.cat_articulos.id;


--
-- Name: cat_direccion_area; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cat_direccion_area (
    id_direccion integer NOT NULL,
    clave character varying,
    nombre_completo character varying,
    abreviatura character varying,
    cadena_folio character varying,
    esactivo boolean,
    id_titular integer,
    tipo character varying,
    tipo_limite numeric,
    esfirmante boolean,
    esarea boolean
);


--
-- Name: cat_direccion_id_direccion_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cat_direccion_id_direccion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cat_direccion_id_direccion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cat_direccion_id_direccion_seq OWNED BY public.cat_direccion_area.id_direccion;


--
-- Name: cat_partidas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cat_partidas (
    id integer NOT NULL,
    clave text,
    descripcion text,
    esactivo boolean
);


--
-- Name: cat_partidas_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cat_partidas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cat_partidas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cat_partidas_id_seq OWNED BY public.cat_partidas.id;


--
-- Name: cat_proveedores; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cat_proveedores (
    id integer NOT NULL,
    rfc character varying(13),
    razon_social text,
    direccion text,
    municipio text,
    telefono text,
    codigo_postal character varying(5),
    esactivo boolean
);


--
-- Name: cat_proveedores_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cat_proveedores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cat_proveedores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cat_proveedores_id_seq OWNED BY public.cat_proveedores.id;


--
-- Name: centro_trabajo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.centro_trabajo (
    id integer NOT NULL,
    codigo integer,
    id_tamano_plantel character varying(3),
    claveplantel character varying,
    descripcion character varying,
    director character varying,
    administrativo character varying,
    esactivo boolean
);


--
-- Name: centro_trabajo_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.centro_trabajo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: centro_trabajo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.centro_trabajo_id_seq OWNED BY public.centro_trabajo.id;


--
-- Name: centro_trabajo_login; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.centro_trabajo_login (
    id_centrotrabajo integer NOT NULL,
    id_numemp_titular integer,
    clave character varying,
    nombre_completo character varying,
    abreviatura character varying,
    esactivo boolean NOT NULL,
    cadena_folio character varying,
    id_direccion_area integer,
    estodos boolean
);


--
-- Name: centro_trabajo_login_id_centrotrabajo_login_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.centro_trabajo_login_id_centrotrabajo_login_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: compras; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.compras (
    id integer NOT NULL,
    id_costo integer,
    total_articulos numeric,
    fecha_compra date,
    folio_compra text,
    esactivo boolean,
    id_partidas integer,
    cantidad_recibida integer DEFAULT 0,
    estatus character varying(30) DEFAULT 'Pendiente'::character varying,
    id_compra_reporte integer,
    gestion_recepciones boolean DEFAULT true,
    id_almacen integer
);


--
-- Name: compras_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.compras_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: compras_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.compras_id_seq OWNED BY public.compras.id;


--
-- Name: compras_reportes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.compras_reportes (
    id integer NOT NULL,
    folio_factura character varying,
    id_proveedor integer,
    fecha_compra date,
    importe numeric,
    impuesto numeric,
    total numeric,
    id_partida integer,
    estatus_entrega character varying(30) DEFAULT 'Pendiente'::character varying
);


--
-- Name: compras_reportes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.compras_reportes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: compras_reportes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.compras_reportes_id_seq OWNED BY public.compras_reportes.id;


--
-- Name: consecutivo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.consecutivo (
    id integer NOT NULL,
    folio_transferencia integer,
    fecha date,
    esactivo boolean
);


--
-- Name: consecutivo_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.consecutivo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: consecutivo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.consecutivo_id_seq OWNED BY public.consecutivo.id;


--
-- Name: consecutivo_requisicion; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.consecutivo_requisicion (
    id integer NOT NULL,
    id_centrotrabajo integer,
    folio_requisicion integer,
    fecha date,
    esactivo boolean
);


--
-- Name: consecutivo_requisicion_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.consecutivo_requisicion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: consecutivo_requisicion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.consecutivo_requisicion_id_seq OWNED BY public.consecutivo_requisicion.id;


--
-- Name: consecutivo_usar_articulo_plantel; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.consecutivo_usar_articulo_plantel (
    id integer NOT NULL,
    id_centrotrabajo integer,
    num_folio integer,
    fecha date,
    esactivo boolean
);


--
-- Name: consecutivo_usar_articulo_plantel_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.consecutivo_usar_articulo_plantel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: consecutivo_usar_articulo_plantel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.consecutivo_usar_articulo_plantel_id_seq OWNED BY public.consecutivo_usar_articulo_plantel.id;


--
-- Name: costos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.costos (
    id integer NOT NULL,
    id_articulo integer,
    id_proveedor integer,
    precio_unitario numeric,
    iva numeric,
    precio_total numeric,
    fecha_inicio date,
    esactivo boolean
);


--
-- Name: costos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.costos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: costos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.costos_id_seq OWNED BY public.costos.id;


--
-- Name: costos_plantel; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.costos_plantel (
    id integer NOT NULL,
    id_costos integer NOT NULL,
    id_centrotrabajo integer NOT NULL,
    fecha_asignacion date DEFAULT CURRENT_DATE NOT NULL,
    descripcion text,
    esactivo boolean DEFAULT true NOT NULL
);


--
-- Name: costos_plantel_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.costos_plantel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: costos_plantel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.costos_plantel_id_seq OWNED BY public.costos_plantel.id;


--
-- Name: empleados; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.empleados (
    id integer NOT NULL,
    numemp integer,
    nombre text,
    ap_paterno text,
    ap_materno text,
    usuario text,
    contrasena text,
    esactivo boolean
);


--
-- Name: empleados_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.empleados_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: empleados_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.empleados_id_seq OWNED BY public.empleados.id;


--
-- Name: movimientos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movimientos (
    id integer NOT NULL,
    id_costos integer,
    articulos_disminuir numeric,
    fecha_movimiento date,
    id_folio_solicitud integer,
    justificacion text,
    id_centrotrabajo_inicial integer,
    id_centrotrabajo_final integer,
    articulos_faltan_surtir numeric,
    id_movimiento_complementario integer,
    esactivo boolean
);


--
-- Name: movimientos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movimientos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movimientos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movimientos_id_seq OWNED BY public.movimientos.id;


--
-- Name: movimientosdg; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movimientosdg (
    id integer NOT NULL,
    id_costos integer,
    existencia_inicial numeric,
    num_articulos_solicitados numeric,
    existencia_final numeric,
    id_centrotrabajo_transfiere integer,
    fecha character varying,
    esactivo boolean,
    requisicion_completa boolean,
    folio_transferencia integer,
    nom_articulo character varying,
    id_articulo integer
);


--
-- Name: movimientosdg_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movimientosdg_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movimientosdg_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movimientosdg_id_seq OWNED BY public.movimientosdg.id;


--
-- Name: movimientosplantel; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movimientosplantel (
    id integer NOT NULL,
    id_costos integer,
    existencia_inicial numeric,
    num_articulos_solicitados numeric,
    existencia_final numeric,
    fecha date,
    nombre_solicita text,
    descripcion text,
    nombre_autoriza text,
    id_centrotrabajo integer,
    ruta character varying,
    folio_solicitud integer,
    id_partida integer,
    producto character varying
);


--
-- Name: movimientosplantel_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movimientosplantel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movimientosplantel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movimientosplantel_id_seq OWNED BY public.movimientosplantel.id;


--
-- Name: ordenes_compra; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ordenes_compra (
    id integer NOT NULL,
    folio_interno character varying(10),
    id_proveedor integer,
    monto_total numeric,
    monto_sin_iva numeric,
    folio_factura text,
    fecha_compra date,
    id_jefe_depto integer,
    id_director_administrativo integer
);


--
-- Name: ordenes_compra_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.ordenes_compra_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ordenes_compra_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.ordenes_compra_id_seq OWNED BY public.ordenes_compra.id;


--
-- Name: ordenes_compra.bak; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."ordenes_compra.bak" (
    id integer DEFAULT nextval('public.ordenes_compra_id_seq'::regclass) NOT NULL,
    folio_interno character varying(10),
    id_proveedor integer,
    monto_total numeric,
    monto_sin_iva numeric,
    folio_factura text,
    fecha_compra date,
    id_jefe_depto integer,
    id_director_administrativo integer
);


--
-- Name: recepciones_compra; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.recepciones_compra (
    id bigint NOT NULL,
    fecha_recepcion date NOT NULL,
    registrado_en timestamp with time zone DEFAULT clock_timestamp() NOT NULL,
    id_usuario integer NOT NULL,
    usuario_nombre text NOT NULL,
    referencia text DEFAULT ''::text NOT NULL,
    observaciones text DEFAULT ''::text NOT NULL,
    clave_operacion uuid NOT NULL,
    solicitud_original jsonb NOT NULL
);


--
-- Name: recepciones_compra_detalle; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.recepciones_compra_detalle (
    id bigint NOT NULL,
    id_recepcion bigint NOT NULL,
    id_compra integer NOT NULL,
    cantidad numeric NOT NULL,
    CONSTRAINT recepciones_compra_detalle_cantidad_check CHECK (((cantidad > (0)::numeric) AND (cantidad <> 'NaN'::numeric)))
);


--
-- Name: recepciones_compra_detalle_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.recepciones_compra_detalle_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: recepciones_compra_detalle_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.recepciones_compra_detalle_id_seq OWNED BY public.recepciones_compra_detalle.id;


--
-- Name: recepciones_compra_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.recepciones_compra_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: recepciones_compra_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.recepciones_compra_id_seq OWNED BY public.recepciones_compra.id;


--
-- Name: solicitud_material; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.solicitud_material (
    id integer NOT NULL,
    folio_solicitud integer,
    id_centrotrabajo_solicitante integer,
    fecha_solicitud date,
    esactivo boolean,
    esautorizado boolean,
    id_costos integer,
    cantidad_solicitada numeric,
    observacion text,
    nom_articulo character varying,
    status text,
    ruta text,
    con_url boolean,
    sin_url boolean,
    ruta_dg text,
    con_url_dg boolean,
    sin_url_dg boolean,
    comentario_plantel character varying,
    comentario_dg character varying,
    fecha_comentario_plantel date
);


--
-- Name: solicitud_material_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.solicitud_material_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: solicitud_material_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.solicitud_material_id_seq OWNED BY public.solicitud_material.id;


--
-- Name: unidad_medida; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.unidad_medida (
    id integer NOT NULL,
    nombre_medida character varying(50) NOT NULL
);


--
-- Name: unidad_medida_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.unidad_medida_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: unidad_medida_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.unidad_medida_id_seq OWNED BY public.unidad_medida.id;


--
-- Name: usuarios; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.usuarios (
    id_usuario integer NOT NULL,
    numempleado integer NOT NULL,
    usuario character varying,
    password character varying,
    esactivo boolean,
    id_tipo_usuario integer,
    nombre character varying,
    clave_area numeric,
    id_departamento numeric,
    centro_trabajo numeric
);


--
-- Name: usuario_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.usuario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: usuario_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.usuario_id_usuario_seq OWNED BY public.usuarios.id_usuario;


--
-- Name: almacen id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.almacen ALTER COLUMN id SET DEFAULT nextval('public.almacen_id_seq'::regclass);


--
-- Name: cat_articulos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cat_articulos ALTER COLUMN id SET DEFAULT nextval('public.cat_articulos_id_seq'::regclass);


--
-- Name: cat_direccion_area id_direccion; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cat_direccion_area ALTER COLUMN id_direccion SET DEFAULT nextval('public.cat_direccion_id_direccion_seq'::regclass);


--
-- Name: cat_partidas id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cat_partidas ALTER COLUMN id SET DEFAULT nextval('public.cat_partidas_id_seq'::regclass);


--
-- Name: cat_proveedores id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cat_proveedores ALTER COLUMN id SET DEFAULT nextval('public.cat_proveedores_id_seq'::regclass);


--
-- Name: centro_trabajo id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.centro_trabajo ALTER COLUMN id SET DEFAULT nextval('public.centro_trabajo_id_seq'::regclass);


--
-- Name: compras id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.compras ALTER COLUMN id SET DEFAULT nextval('public.compras_id_seq'::regclass);


--
-- Name: compras_reportes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.compras_reportes ALTER COLUMN id SET DEFAULT nextval('public.compras_reportes_id_seq'::regclass);


--
-- Name: consecutivo id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consecutivo ALTER COLUMN id SET DEFAULT nextval('public.consecutivo_id_seq'::regclass);


--
-- Name: consecutivo_requisicion id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consecutivo_requisicion ALTER COLUMN id SET DEFAULT nextval('public.consecutivo_requisicion_id_seq'::regclass);


--
-- Name: consecutivo_usar_articulo_plantel id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consecutivo_usar_articulo_plantel ALTER COLUMN id SET DEFAULT nextval('public.consecutivo_usar_articulo_plantel_id_seq'::regclass);


--
-- Name: costos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.costos ALTER COLUMN id SET DEFAULT nextval('public.costos_id_seq'::regclass);


--
-- Name: costos_plantel id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.costos_plantel ALTER COLUMN id SET DEFAULT nextval('public.costos_plantel_id_seq'::regclass);


--
-- Name: empleados id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.empleados ALTER COLUMN id SET DEFAULT nextval('public.empleados_id_seq'::regclass);


--
-- Name: movimientos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movimientos ALTER COLUMN id SET DEFAULT nextval('public.movimientos_id_seq'::regclass);


--
-- Name: movimientosdg id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movimientosdg ALTER COLUMN id SET DEFAULT nextval('public.movimientosdg_id_seq'::regclass);


--
-- Name: movimientosplantel id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movimientosplantel ALTER COLUMN id SET DEFAULT nextval('public.movimientosplantel_id_seq'::regclass);


--
-- Name: ordenes_compra id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ordenes_compra ALTER COLUMN id SET DEFAULT nextval('public.ordenes_compra_id_seq'::regclass);


--
-- Name: recepciones_compra id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.recepciones_compra ALTER COLUMN id SET DEFAULT nextval('public.recepciones_compra_id_seq'::regclass);


--
-- Name: recepciones_compra_detalle id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.recepciones_compra_detalle ALTER COLUMN id SET DEFAULT nextval('public.recepciones_compra_detalle_id_seq'::regclass);


--
-- Name: solicitud_material id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.solicitud_material ALTER COLUMN id SET DEFAULT nextval('public.solicitud_material_id_seq'::regclass);


--
-- Name: unidad_medida id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.unidad_medida ALTER COLUMN id SET DEFAULT nextval('public.unidad_medida_id_seq'::regclass);


--
-- Name: usuarios id_usuario; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuario_id_usuario_seq'::regclass);


--
-- Name: almacen almacen_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.almacen
    ADD CONSTRAINT almacen_pkey PRIMARY KEY (id);


--
-- Name: cat_articulos cat_articulos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cat_articulos
    ADD CONSTRAINT cat_articulos_pkey PRIMARY KEY (id);


--
-- Name: cat_direccion_area cat_direccion_area_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cat_direccion_area
    ADD CONSTRAINT cat_direccion_area_pkey PRIMARY KEY (id_direccion);


--
-- Name: cat_partidas cat_partidas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cat_partidas
    ADD CONSTRAINT cat_partidas_pkey PRIMARY KEY (id);


--
-- Name: cat_proveedores cat_proveedores_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cat_proveedores
    ADD CONSTRAINT cat_proveedores_pkey PRIMARY KEY (id);


--
-- Name: centro_trabajo centro_trabajo_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.centro_trabajo
    ADD CONSTRAINT centro_trabajo_pkey PRIMARY KEY (id);


--
-- Name: compras compras_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.compras
    ADD CONSTRAINT compras_pkey PRIMARY KEY (id);


--
-- Name: compras_reportes compras_reportes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.compras_reportes
    ADD CONSTRAINT compras_reportes_pkey PRIMARY KEY (id);


--
-- Name: consecutivo consecutivo_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consecutivo
    ADD CONSTRAINT consecutivo_pkey PRIMARY KEY (id);


--
-- Name: consecutivo_requisicion consecutivo_requisicion_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consecutivo_requisicion
    ADD CONSTRAINT consecutivo_requisicion_pkey PRIMARY KEY (id);


--
-- Name: consecutivo_usar_articulo_plantel consecutivo_usar_articulo_plantel_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.consecutivo_usar_articulo_plantel
    ADD CONSTRAINT consecutivo_usar_articulo_plantel_pkey PRIMARY KEY (id);


--
-- Name: costos costos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.costos
    ADD CONSTRAINT costos_pkey PRIMARY KEY (id);


--
-- Name: costos_plantel costos_plantel_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.costos_plantel
    ADD CONSTRAINT costos_plantel_pkey PRIMARY KEY (id);


--
-- Name: empleados empleados_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.empleados
    ADD CONSTRAINT empleados_pkey PRIMARY KEY (id);


--
-- Name: movimientos movimientos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movimientos
    ADD CONSTRAINT movimientos_pkey PRIMARY KEY (id);


--
-- Name: movimientosdg movimientosdg_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movimientosdg
    ADD CONSTRAINT movimientosdg_pkey PRIMARY KEY (id);


--
-- Name: movimientosplantel movimientosplantel_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movimientosplantel
    ADD CONSTRAINT movimientosplantel_pkey PRIMARY KEY (id);


--
-- Name: ordenes_compra.bak ordenes_compra_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ordenes_compra.bak"
    ADD CONSTRAINT ordenes_compra_pkey PRIMARY KEY (id);


--
-- Name: cat_articulos.backup pk_cat_articulos; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cat_articulos.backup"
    ADD CONSTRAINT pk_cat_articulos PRIMARY KEY (id);


--
-- Name: recepciones_compra recepciones_compra_clave_operacion_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.recepciones_compra
    ADD CONSTRAINT recepciones_compra_clave_operacion_key UNIQUE (clave_operacion);


--
-- Name: recepciones_compra_detalle recepciones_compra_detalle_id_recepcion_id_compra_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.recepciones_compra_detalle
    ADD CONSTRAINT recepciones_compra_detalle_id_recepcion_id_compra_key UNIQUE (id_recepcion, id_compra);


--
-- Name: recepciones_compra_detalle recepciones_compra_detalle_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.recepciones_compra_detalle
    ADD CONSTRAINT recepciones_compra_detalle_pkey PRIMARY KEY (id);


--
-- Name: recepciones_compra recepciones_compra_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.recepciones_compra
    ADD CONSTRAINT recepciones_compra_pkey PRIMARY KEY (id);


--
-- Name: solicitud_material solicitud_material_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.solicitud_material
    ADD CONSTRAINT solicitud_material_pkey PRIMARY KEY (id);


--
-- Name: compras_reportes uk_folio_factura; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.compras_reportes
    ADD CONSTRAINT uk_folio_factura UNIQUE (folio_factura);


--
-- Name: unidad_medida unidad_medida_nombre_medida_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.unidad_medida
    ADD CONSTRAINT unidad_medida_nombre_medida_key UNIQUE (nombre_medida);


--
-- Name: unidad_medida unidad_medida_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.unidad_medida
    ADD CONSTRAINT unidad_medida_pkey PRIMARY KEY (id);


--
-- Name: costos_plantel uq_costo_centrotrabajo; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.costos_plantel
    ADD CONSTRAINT uq_costo_centrotrabajo UNIQUE (id_costos, id_centrotrabajo);


--
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario);


--
-- Name: compras_folio_compra_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX compras_folio_compra_idx ON public.compras USING btree (folio_compra);


--
-- Name: idx_movimientosdg_id_articulo; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_movimientosdg_id_articulo ON public.movimientosdg USING btree (id_articulo);


--
-- Name: recepciones_compra_detalle_id_compra_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX recepciones_compra_detalle_id_compra_idx ON public.recepciones_compra_detalle USING btree (id_compra);


--
-- Name: recepciones_compra_fecha_recepcion_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX recepciones_compra_fecha_recepcion_idx ON public.recepciones_compra USING btree (fecha_recepcion);


--
-- Name: uq_cat_proveedores_rfc_norm; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX uq_cat_proveedores_rfc_norm ON public.cat_proveedores USING btree (upper(btrim((rfc)::text)));


--
-- Name: recepciones_compra_detalle aplicar_recepcion; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER aplicar_recepcion AFTER INSERT ON public.recepciones_compra_detalle FOR EACH ROW EXECUTE FUNCTION public.sicai_aplicar_recepcion();


--
-- Name: recepciones_compra_detalle validar_recepcion; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER validar_recepcion BEFORE INSERT ON public.recepciones_compra_detalle FOR EACH ROW EXECUTE FUNCTION public.sicai_validar_recepcion();


--
-- Name: almacen almacen_id_unidad_medida_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.almacen
    ADD CONSTRAINT almacen_id_unidad_medida_fkey FOREIGN KEY (id_unidad_medida) REFERENCES public.unidad_medida(id);


--
-- Name: compras compras_id_compra_reporte_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.compras
    ADD CONSTRAINT compras_id_compra_reporte_fkey FOREIGN KEY (id_compra_reporte) REFERENCES public.compras_reportes(id);


--
-- Name: cat_articulos fk_cat_articulos_unidad_medida; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cat_articulos
    ADD CONSTRAINT fk_cat_articulos_unidad_medida FOREIGN KEY (unidad_medida_id) REFERENCES public.unidad_medida(id);


--
-- Name: cat_articulos.backup fk_cat_articulos_unidad_medida; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cat_articulos.backup"
    ADD CONSTRAINT fk_cat_articulos_unidad_medida FOREIGN KEY (unidad_medida_id) REFERENCES public.unidad_medida(id);


--
-- Name: compras fk_compras_almacen; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.compras
    ADD CONSTRAINT fk_compras_almacen FOREIGN KEY (id_almacen) REFERENCES public.almacen(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: costos_plantel fk_costos_plantel_centro; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.costos_plantel
    ADD CONSTRAINT fk_costos_plantel_centro FOREIGN KEY (id_centrotrabajo) REFERENCES public.centro_trabajo(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: costos_plantel fk_costos_plantel_costo; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.costos_plantel
    ADD CONSTRAINT fk_costos_plantel_costo FOREIGN KEY (id_costos) REFERENCES public.costos(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: movimientosdg fk_movimientosdg_articulo; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movimientosdg
    ADD CONSTRAINT fk_movimientosdg_articulo FOREIGN KEY (id_articulo) REFERENCES public.cat_articulos(id);


--
-- Name: recepciones_compra_detalle recepciones_compra_detalle_id_recepcion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.recepciones_compra_detalle
    ADD CONSTRAINT recepciones_compra_detalle_id_recepcion_fkey FOREIGN KEY (id_recepcion) REFERENCES public.recepciones_compra(id);


--
-- Name: recepciones_compra recepciones_compra_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.recepciones_compra
    ADD CONSTRAINT recepciones_compra_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario);


--
-- PostgreSQL database dump complete
--

\unrestrict 4AwcPJdUfyXAvrcAXoOvHf4ExcBfWcGJ0IQw47FlpdSjKR8EjmyJZi1leDyz0Cy

