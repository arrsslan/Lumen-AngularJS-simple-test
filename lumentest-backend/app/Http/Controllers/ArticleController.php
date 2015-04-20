<?php
 
namespace App\Http\Controllers;
 
use App\Article;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
 
 
class ArticleController extends Controller{
 
 
    public function index(){
 
        $articles  = Article::all();
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Credentials: true');
        return response()->json($articles);
 
    }
 
    public function getArticle($id){
 
        $article  = Article::find($id);
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Credentials: true'); 
        return response()->json($article);
    }
 
    public function saveArticle(Request $request){
 
        $article = Article::create($request->all());
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Credentials: true'); 
        return response()->json($article);
 
    }
 
    public function deleteArticle($id){
        $article  = Article::find($id);
 
        $article->delete();
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Credentials: true'); 
        return response()->json('success');
    }
 
    public function updateArticle(Request $request,$id){
        $article  = Article::find($id);
 
        $article->title = $request->input('title');
        $article->content = $request->input('content');
 
        $article->save();
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Credentials: true'); 
        return response()->json($article);
    }
 
}
