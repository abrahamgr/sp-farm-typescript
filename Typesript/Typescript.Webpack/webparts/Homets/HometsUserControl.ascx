<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="HometsUserControl.ascx.cs" Inherits="Typescript.Webpack.webparts.Homets.HometsUserControl" %>

<% string siteUrl = SPContext.Current.Site.ServerRelativeUrl; %>
<link href="<%= string.Format("{0}/Style Library/Typescript.Webpack/css/main.js", siteUrl) %>" rel="text/css" />
<link href="<%= string.Format("{0}/Style Library/Typescript.Webpack/css/homestyle.js", siteUrl) %>" rel="text/css" />

<p id="p_home_w">Loading</p>

<script src="<%= string.Format("{0}/Style Library/Typescript.Webpack/js/home.js", siteUrl) %>" type="text/javascript"></script>